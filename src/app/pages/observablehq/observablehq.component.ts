import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Graph } from '../../core/models/graph.model';
// @ts-ignore
import notebook from '../../../assets/js/graph';
// @ts-ignore
import { Runtime, Inspector } from '@observablehq/runtime/dist/runtime.js';

@Component({
  selector: 'app-observablehq',
  templateUrl: './observablehq.component.html',
  styleUrls: ['./observablehq.component.css'],
})
export class ObservablehqComponent implements OnInit, AfterViewInit {
  @ViewChild('chart2') chart2: ElementRef<HTMLInputElement> = {} as ElementRef;

  data: Graph = {} as Graph;
  simulation: any;
  links: any;
  nodes: any;
  link: any;
  node: any;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const runtime = new Runtime();
    const main = runtime.module(notebook, Inspector.into(document.body));
    // Runtime.load(notebook, Inspector.into(this.chart2.nativeElement));
  }


}

