import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GraphRdf } from '../../core/models/graph.model';
import { D3jsService } from '../../core/services/d3js.service';
import { D3jstestService } from '../../core/services/d3jstest.service';
import * as dataJson from '../../../assets/rdf.json';
import { RdfService } from '../../core/services/rdf.service';

@Component({
  selector: 'app-rdf',
  templateUrl: './rdf.component.html',
  styleUrls: ['./rdf.component.css']
})
export class RdfComponent implements OnInit, AfterViewInit {

  @ViewChild('chart') chart: ElementRef<HTMLInputElement> = {} as ElementRef;

  data: GraphRdf = {} as GraphRdf;
  constructor(
    private d3service: D3jsService,
    private test: D3jstestService,
    private rdfService: RdfService,
  ) {}

  ngOnInit(): void {
    this.rdfService.loadPredicates(dataJson);
    this.rdfService.exe();
    this.data = this.rdfService.data;
  }

  ngAfterViewInit(): void {
    this.d3service.initRdfChart(this.chart.nativeElement, this.data);
  }

}
