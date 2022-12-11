import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageMeaningRepresentationComponent } from './page-meaning-representation/page-meaning-representation.component';
import { PageMeaningRepresentation2Component } from './page-meaning-representation2/page-meaning-representation2.component';
import { ClearPipe } from '../core/pipes/clear.pipe';
import { MultipathComponent } from './multipath/multipath.component';
import { ObservablehqComponent } from './observablehq/observablehq.component';
import { RdfComponent } from './rdf/rdf.component';

@NgModule({
  declarations: [
    PageMeaningRepresentationComponent,
    PageMeaningRepresentation2Component,
    ClearPipe,
    MultipathComponent,
    ObservablehqComponent,
    RdfComponent,
  ],
  imports: [CommonModule, PageRoutingModule],
})
export class PageModule {}
