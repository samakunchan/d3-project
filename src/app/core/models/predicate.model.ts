import { Argument } from './argument.model';

export interface PssPredicate {
  id: number;
  negation: boolean;
  refSource: string;
  source: string;
  value: string[];
  arguments: Argument[];
}

export interface PredicateNode {
  id: number;
  type: string;
  frame: string;
  text: string[];
  dashed: boolean;
}
