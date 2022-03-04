export class Graph {
  nodes: GraphNode[];
  links: GraphLink[];
  constructor(nodes: GraphNode[], links: GraphLink[]) {
    this.nodes = nodes;
    this.links = links;
  }
}

export class GraphNode {
  id: number;
  idP?: string;
  type?: string;
  group: number;
  frame?: string;
  text: string[];
  dashed: boolean;

  constructor(id: number, idP: string, type: string, group: number, frame: string, text: string[], dashed: boolean) {
    this.id = id;
    this.idP = idP;
    this.type = type;
    this.group = group;
    this.frame = frame;
    this.text = text;
    this.dashed = dashed;
  }
}

export class GraphLink {
  source: any;
  target: any;
  value: number;
  typeS: string;
  typeT: string;
  dashed: boolean;

  constructor(source: any, target: any, value: number, typeS: string, typeT: string, dashed: boolean) {
    this.source = source;
    this.target = target;
    this.value = value;
    this.typeS = typeS;
    this.typeT = typeT;
    this.dashed = dashed;
  }
}

export const types = [
  { type: 'agent' },
  { type: 'coagent' },
  { type: 'theme' },
  { type: 'cotheme' },
  { type: 'patient' },
  { type: 'copatient' },
  { type: 'topic' },
  { type: 'cotopic' },
  { type: 'locationfuzzy' },
  { type: 'locationsource' },
  { type: 'locationdestination' },
  { type: 'locationspan' },
  { type: 'locationexact' },
  { type: 'location' },
  { type: 'colocationfuzzy' },
  { type: 'colocationsource' },
  { type: 'colocationdestination' },
  { type: 'colocationspan' },
  { type: 'colocationexact' },
  { type: 'colocation' },
  { type: 'initial_location' },
  { type: 'recipient' },
  { type: 'corecipient' },
  { type: 'experiencer' },
  { type: 'coexperiencer' },
  { type: 'stimulus' },
  { type: 'costimulus' },
  { type: 'destination' },
  { type: 'codestination' },
  { type: 'instrument' },
  { type: 'coinstrument' },
  { type: 'source' },
  { type: 'cosource' },
  { type: 'attribute' },
  { type: 'coattribute' },
  { type: 'beneficiary' },
  { type: 'cobeneficiary' },
  { type: 'pivot' },
  { type: 'copivot' },
  { type: 'pred' },
  { type: 'copred' },
  { type: 'asset' },
  { type: 'coasset' },
  { type: 'value' },
  { type: 'covalue' },
  { type: 'product' },
  { type: 'coproduct' },
  { type: 'material' },
  { type: 'comaterial' },
  { type: 'extent' },
  { type: 'coextent' },
  { type: 'trajectory' },
  { type: 'cotrajectory' },
  { type: 'timeexact' },
  { type: 'time' },
  { type: 'cotime' },
  { type: 'cotimeexact' },
  { type: 'timemin' },
  { type: 'cotimemin' },
  { type: 'timemax' },
  { type: 'cotimemax' },
  { type: 'timeduration' },
  { type: 'cotimeduration' },
  { type: 'timefuzzy' },
  { type: 'cotimefuzzy' },
  { type: 'measure' },
  { type: 'comeasure' },
  { type: 'consequence' },
  { type: 'coconsequence' },
  { type: 'manner' },
  { type: 'comanner' },
  { type: 'event' },
  { type: 'coevent' },
  { type: 'alternative' },
  { type: 'addition' },
  { type: 'cause' },
  { type: 'cocause' },
  { type: 'comparison' },
  { type: 'result' },
  { type: 'coresult' },
  { type: 'condition' },
  { type: 'enumeration' },
  { type: 'explanation' },
  { type: 'illustration' },
  { type: 'purpose' },
  { type: 'copurpose' },
  { type: 'opposition' },
  { type: 'restriction' },
  { type: 'whatever' },
];

// {
// dashed: boolean;
// typeT: string;
// typeS: string;
// index: number;
// source: { dashed: boolean; vx: number; vy: number; x: number; index: number; y: number; id: number; text: string[]; type: string; group: number; frame: string };
// value: number;
// target: { dashed: boolean; vx: number; vy: number; idP: string; x: number; index: number; y: number; id: number; text: string[]; type: string; group: number } }
