import { NgModule } from '@angular/core';
import {CoreModule} from '../core/core.module';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CoreModule
  ],
  exports: [NotFoundComponent],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    {provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG}
  ]
})
export class SharedModule { }
