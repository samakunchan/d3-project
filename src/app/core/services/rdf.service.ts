import { Injectable } from '@angular/core';
import { GraphLinkRdf, GraphNodeRdf, GraphRdf } from '../models/graph.model';
import { Triple } from '../models/triple.model';

@Injectable({
  providedIn: 'root'
})
export class RdfService {
  datas: any;
  data: GraphRdf = {} as GraphRdf;
  triples: Triple[] = [];
  nodes: GraphNodeRdf[] = [] as GraphNodeRdf[];
  links: GraphLinkRdf[] = [] as GraphLinkRdf[];
  constructor() { }

  loadPredicates(dataJson: { message: any; code: number; language: string; startTime: number; endTime: number; result: { triples: {} } }) {
    return (this.datas = dataJson.result.triples);
  }

  exe() {
    this.triples = this.datas;
    console.log('Total triples: ' + this.triples.length);

    const subjects = this.triples.map(triple => triple.subject);
    subjects.forEach(value => {
      this.nodes.push({
        ...value,
        dashed: true
      });
    });

    const others = this.triples.map(triple => triple.object && triple.predicate);
    console.log(others);
    this.triples.forEach((triple, index) => {
      if('predicate' in triple) {
        // console.log(index);
        this.nodes.push({
          ...triple.predicate,
          dashed: true
        });
      } else {
        console.log('aaaaa');
        this.links.push({
          source: triple.subject.uri,
          target: triple.object.uri,
          typeT: triple.predicate.uri
        });
      }
    })

    this.data = {
      nodes: this.nodes,
      links: this.links,
    };
  }

}
