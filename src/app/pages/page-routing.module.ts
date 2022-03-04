import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMeaningRepresentationComponent } from './page-meaning-representation/page-meaning-representation.component';
import { PageMeaningRepresentation2Component } from './page-meaning-representation2/page-meaning-representation2.component';

const routes: Routes = [
  { path: 'representation-semantique', component: PageMeaningRepresentationComponent },
  { path: 'representation-semantique-2', component: PageMeaningRepresentation2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
