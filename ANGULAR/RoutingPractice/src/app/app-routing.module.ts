import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
    // children: []  // this is for loading sub-components & on the platform it recommended not to worry about this for now.
  },
  {
    path: 'home/test',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'task/:id',
    pathMatch: 'full',
    component: TaskComponent,
  },
  {
    path: '**',
    pathMatch: 'full', //don't need this for catch-all routes.
    component: PageNotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
