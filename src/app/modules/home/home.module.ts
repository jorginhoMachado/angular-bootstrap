import { NgModule } from '@angular/core';
import {CoreModule} from '../../core/core.module';
import {HomeRoutingModule} from './home-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CoreModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
