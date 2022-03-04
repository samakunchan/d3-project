import { Argument } from './argument.model';

export interface Predicate {
  id: number;
  negation: boolean;
  refSource: string;
  source: string;
  value: string[];
  arguments: Argument[];
}
