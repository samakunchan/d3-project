import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { D3jsService } from '../../core/services/d3js.service';
import { exempleMarie } from '../../core/fakeDatas/graph-nodes.fake-data';

@Component({
  selector: 'app-page-meaning-representation',
  templateUrl: './page-meaning-representation.component.html',
  styleUrls: ['./page-meaning-representation.component.css'],
})
export class PageMeaningRepresentationComponent implements OnInit, AfterViewInit {
  @ViewChild('chart') chart: ElementRef<HTMLInputElement> = {} as ElementRef;
  data: { links: any[]; nodes: any[] } = {} as any;
  constructor(private d3service: D3jsService) {}

  ngOnInit(): void {
    this.data = exempleMarie;
  }

  ngAfterViewInit(): void {
    this.d3service.initChart(this.chart.nativeElement, exempleMarie);
  }
}
