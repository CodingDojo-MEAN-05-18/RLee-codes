import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromIndex from './index';



const routes: Routes = [
  {
    path: 'burbank',
    pathMatch: 'full',
    component: fromIndex.BurbankComponent
  },
  {
    path: 'chicago',
    pathMatch: 'full',
    component: fromIndex.ChicagoComponent
  },
  {
    path: 'dallas',
    pathMatch: 'full',
    component: fromIndex.DallasComponent
  },
  {
    path: 'dc',
    pathMatch: 'full',
    component: fromIndex.DcComponent
  },
  {
    path: 'sanjose',
    pathMatch: 'full',
    component: fromIndex.SanjoseComponent
  },
  {
    path: 'seattle',
    pathMatch: 'full',
    component: fromIndex.SeattleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
