import { Injectable } from '@angular/core';
import { GraphLinkRdf, GraphNodeRdf, GraphRdf } from '../models/graph.model';
import { Triple } from '../models/triple.model';
import { Subject } from '../models/subject.model';

@Injectable({
  providedIn: 'root',
})
export class RdfService {
  datas: any;
  data: GraphRdf = {} as GraphRdf;
  triples: Triple[] = [];
  nodes: GraphNodeRdf[] = [] as GraphNodeRdf[];
  links: GraphLinkRdf[] = [] as GraphLinkRdf[];

  subjects: Subject[] = [] as Subject[];
  objects: Object[] = [] as Object[];
  constructor() {}

  loadPredicates(dataJson: { message: any; code: number; language: string; startTime: number; endTime: number; result: { triples: {} } }) {
    return (this.datas = dataJson.result.triples);
  }

  exe() {
    this.triples = this.datas;
    let group = this.triples
      .reduce((r: any, a: any) => {
        r[a.subject.uri] = [...(r[a.subject.uri] || []), a.object];
        return r;
      }, {});
    console.log(group);

    const reworkedDatas = Object.values(group).map((obj: any, index: number) =>
      obj.map((val: any) => ({ ...val, id: val?.id === 0 ? index : val?.id })),
    );
    console.log(reworkedDatas);
    reworkedDatas.forEach((values: any, index: number) => {
      // TODO Faire finalement comme pour meaning et construire les nodes et arguments ici
    });
    this.data = {
      nodes: [],
      links: [],
    };
    // console.table(this.data);
  }

  removeDuplicates(datas: any[]) {
    return datas.filter((value, index) => {
      const _value = JSON.stringify(value);
      return index === datas.findIndex(obj => {
        return JSON.stringify(obj) === _value;
      });
    });
  }
}
