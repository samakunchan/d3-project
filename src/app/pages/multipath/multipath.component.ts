import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Graph } from '../../core/models/graph.model';
import { D3jsService } from '../../core/services/d3js.service';
import { D3jstestService } from '../../core/services/d3jstest.service';
import { MeaningRepresentationService } from '../../core/services/meaning-representation.service';
import * as dataJson from '../../../assets/multipath.json';

@Component({
  selector: 'app-multipath',
  templateUrl: './multipath.component.html',
  styleUrls: ['./multipath.component.css'],
})
export class MultipathComponent implements OnInit, AfterViewInit {
  @ViewChild('chart2') chart2: ElementRef<HTMLInputElement> = {} as ElementRef;

  data: Graph = {} as Graph;
  constructor(
    private d3service: D3jsService,
    private test: D3jstestService,
    private meaningRepresentationService: MeaningRepresentationService,
  ) {}

  ngOnInit(): void {
    this.meaningRepresentationService.loadPredicates(dataJson);
    this.meaningRepresentationService.exe();
    this.data = this.meaningRepresentationService.data;
  }

  ngAfterViewInit(): void {
    this.d3service.initChart(this.chart2.nativeElement, this.data);
  }
}
