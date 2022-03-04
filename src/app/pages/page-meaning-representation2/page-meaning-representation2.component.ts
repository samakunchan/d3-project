import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { exempleMarie, exempleLucGood, exempleLucNotGood } from '../../core/fakeDatas/graph-nodes.fake-data';
import { D3jsService } from '../../core/services/d3js.service';
import { MeaningRepresentationService } from '../../core/services/meaning-representation.service';

@Component({
  selector: 'app-page-meaning-representation2',
  templateUrl: './page-meaning-representation2.component.html',
  styleUrls: ['./page-meaning-representation2.component.css'],
})
export class PageMeaningRepresentation2Component implements OnInit, AfterViewInit {
  @ViewChild('chart2') chart2: ElementRef<HTMLInputElement> = {} as ElementRef;

  data: any = {} as any;
  constructor(private d3service: D3jsService, private meaningRepresentationService: MeaningRepresentationService) {}

  ngOnInit(): void {
    this.data = exempleLucGood;
  }

  ngAfterViewInit(): void {
    this.d3service.initChart(this.chart2.nativeElement, this.data);
  }
}
