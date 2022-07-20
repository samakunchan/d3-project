import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { D3jsService } from '../../core/services/d3js.service';
import { MeaningRepresentationService } from '../../core/services/meaning-representation.service';
import { D3jstestService } from '../../core/services/d3jstest.service';
import { Graph } from '../../core/models/graph.model';

@Component({
  selector: 'app-page-meaning-representation2',
  templateUrl: './page-meaning-representation2.component.html',
  styleUrls: ['./page-meaning-representation2.component.css'],
})
export class PageMeaningRepresentation2Component implements OnInit, AfterViewInit {
  @ViewChild('chart2') chart2: ElementRef<HTMLInputElement> = {} as ElementRef;

  data: Graph = {} as Graph;
  constructor(
    private d3service: D3jsService,
    private test: D3jstestService,
    private meaningRepresentationService: MeaningRepresentationService,
  ) {}

  ngOnInit(): void {
    this.data = this.meaningRepresentationService.data;
  }

  ngAfterViewInit(): void {
    this.d3service.initChart(this.chart2.nativeElement, this.data);
  }
}
