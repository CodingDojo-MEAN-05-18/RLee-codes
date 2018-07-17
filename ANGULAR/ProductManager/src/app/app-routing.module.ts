import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//importing barrelled routes
import * as fromRoutes from './routes/index';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: fromRoutes.LandingPageComponent
  },
  {
    path: 'products',
    pathMatch: 'full',
    component: fromRoutes.ProdListComponent
  },
  {
    path: 'products/new',
    pathMatch: 'full',
    component: fromRoutes.CreateProdComponent
  },
  {
    path: 'products/edit/:id',
    pathMatch: 'full',
    component: fromRoutes.UpdateProdComponent
  },
  {
    path: '*',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
