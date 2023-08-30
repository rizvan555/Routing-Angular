import { Routes } from '@angular/router';
import { c1Route } from './c1/c1.route';
import { C2Route } from './c2/c2.route';
import { C3Route } from './c3/c3.route';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  c1Route,
  C2Route,
  C3Route,
  { path: '**', component: NotFoundComponent },
];
