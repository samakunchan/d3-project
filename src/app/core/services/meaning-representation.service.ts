import { Injectable } from '@angular/core';
import * as dataJson from '../../../assets/document.json';
import { PssArgument } from '../models/argument.model';
import { PssPredicate } from '../models/predicate.model';
import { Graph, GraphLink, GraphNode } from '../models/graph.model';

@Injectable({
  providedIn: 'root',
})
export class MeaningRepresentationService {
  datas: any = dataJson as any;
  predicates: PssPredicate[];
  nodes: GraphNode[] = [] as GraphNode[];
  links: GraphLink[] = [] as GraphLink[];
  arg: PssArgument[] = [] as PssArgument[];
  data: Graph = {} as Graph;

  constructor() {
    this.predicates = this.datas.result.predicates;
    console.log('Total predicates: ' + this.predicates.length);

    this.predicates.forEach((predicate: PssPredicate) =>
      predicate.arguments.forEach((argument: PssArgument) =>
        this.arg.push({
          ...argument,
          predicate: {
            id: predicate.id,
            type: 'predicate',
            frame: predicate.source,
            text: predicate.value,
            dashed: false,
          },
        } as PssArgument),
      ),
    );

    // Groupe toute les propriétés qui ont la même valeur
    let group = this.arg.reduce((r: any, a: PssArgument) => {
      r[a.value] = [...(r[a.value] || []), a];
      return r;
    }, {});

    console.log(group);
    // Traite les cas des id qui sont égale à 0
    const reworkedDatas = Object.values(group).map((obj: any, index: number) =>
      obj.map((val: any) => ({ ...val, id: val.id === 0 ? index : val.id })),
    );

    reworkedDatas.forEach((values: any, index: number) => {
      // Concaténation de tout les roles pour les arguments
      const types = values.map((type: any) => type.role).join(' ');
      const allType = new Set(types.split(' '));

      // Concaténation de tout les id predicat pour les arguments
      const idPredicates = values.map((value: any) => value.predicate.id).join(' ');
      const allIdPredicates = new Set(idPredicates.split(' '));

      values.forEach((value: any) => {
        // console.log(value);
        // Création de lien
        this.links.push({
          source: value.predicate.id,
          target: value.id,
          typeT: value.role,
          typeS: 'predicate',
          dashed: value.predicate.frame === 'INFERRED',
        } as GraphLink);

        // Création des noeuds "Prédicat" (rouge)
        this.nodes.push({
          ...value.predicate,
          group: index + 1,
          dashed: value.predicate.frame === 'INFERRED',
        } as GraphNode);
        // console.log(this.nodes);

        // Création des noeuds "Argument" (bleu)
        this.nodes.push({
          id: value.id,
          idP: Array.from(allIdPredicates)
            .map((res) => `idP${res}`)
            .join(' '),
          type: `[A${index}] ${Array.from(allType).join(' ')}`,
          text: [value.value],
          group: index + 1,
          dashed: value.predicate.frame === 'INFERRED',
        });
      });
    });

    // 1er tri avec un filter + concat afin de placer tout les predicates en 1er.
    // Aussi pour le confort visuel
    // Finalement c'est important de faire ce tri parce que certains arguments empechent la création de predicat,
    // parce qu'ils apparaissent en 1er.
    const filteredPredicate = this.nodes.filter((res: GraphNode) => res.type === 'predicate');
    const filteredArgument = this.nodes
      .filter((res: GraphNode) => res.type !== 'predicate')
      .sort((a: GraphNode, b: GraphNode) => (a.group > b.group ? 1 : -1));

    const concatedNodes = filteredPredicate.concat(filteredArgument);

    // Supprime les noeuds dupliqués
    const filteredArr = concatedNodes.reduce((acc: GraphNode[], current: GraphNode) => {
      const x = acc.find((item: GraphNode) => item.id === current.id);
      return !x ? acc.concat([current]) : acc;
    }, []);

    this.data = {
      nodes: filteredArr,
      links: this.links,
    };
    console.log('NODES');
    console.table(this.data.nodes);

    console.log('LINKS');
    console.table(this.data.links);
  }
}
