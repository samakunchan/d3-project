import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMeaningRepresentationComponent } from './page-meaning-representation/page-meaning-representation.component';
import { PageMeaningRepresentation2Component } from './page-meaning-representation2/page-meaning-representation2.component';
import { MultipathComponent } from './multipath/multipath.component';
import { ObservablehqComponent } from './observablehq/observablehq.component';
import { RdfComponent } from './rdf/rdf.component';

const routes: Routes = [
  { path: 'representation-semantique', component: PageMeaningRepresentationComponent },
  { path: 'representation-semantique-2', component: PageMeaningRepresentation2Component },
  { path: 'multipath', component: MultipathComponent },
  { path: 'obs', component: ObservablehqComponent },
  { path: 'rdf', component: RdfComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
