import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PATH} from './shared/constants/path.constant';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: PATH.HOME, loadChildren: './modules/home/home.module#HomeModule'},
  { path: '', redirectTo: PATH.HOME, pathMatch: 'full'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
