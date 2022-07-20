import { PredicateNode } from './predicate.model';

export interface Argument {
  id: number;
  value: string;
  role: string;
  tags: string[];
  refValue: string;
  predicate: PredicateNode;
}
export interface PssArgument {
  id: number;
  idP?: string;
  role: string;
  tags: string[];
  value: string;
  refValue: string;
  predicate: PredicateNode;
}
