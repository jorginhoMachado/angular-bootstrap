import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PATH} from './shared/constants/path.constant';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {AuthGuard} from './core/auth/auth.guard';
import {LoginComponent} from './core/components/login/login.component';

const routes: Routes = [
  { path: PATH.HOME, loadChildren: './modules/home/home.module#HomeModule', canActivate: [AuthGuard]},
  { path: '', redirectTo: PATH.HOME, pathMatch: 'full', canActivate: [AuthGuard]},
  { path: PATH.LOGIN, component: LoginComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
