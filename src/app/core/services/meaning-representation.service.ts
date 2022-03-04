import { Injectable } from '@angular/core';
import * as dataJson from '../../../assets/luc.json';
import { Argument } from '../models/argument.model';
import { Predicate } from '../models/predicate.model';
import { GraphNode } from '../models/graph.model';
import { DatePipe } from '@angular/common';

const INFERRED = 'INFERRED';

@Injectable({
  providedIn: 'root',
})
export class MeaningRepresentationService {
  datas: any = dataJson as any;
  predicates: Predicate[];
  constructor() {
    this.predicates = this.datas.result.predicates;
    console.log(this.datas.result.predicates);
    console.log(this.datas.result.predicates.length);

  }

  buildWithMainNode(predicate: Predicate) {
    return null;
  }

  buildWithNormalNode(predicate: Predicate) {
    return predicate.arguments.map((argument) => ({
      id: argument.id,
      idP: `idP${predicate.id}`,
      type: `[A${1}] ${argument.role}`,
      group: 1,
      text: [argument.value + ' ' + predicate.id],
      dashed: false,
    }));
  }

  setSource(predicate: Predicate): GraphNode {
    return {
      id: predicate.id,
      type: 'predicate',
      group: 1,
      frame: predicate.source + ' ' + predicate.id,
      text: predicate.value,
      dashed: false,
    };
  }
}
