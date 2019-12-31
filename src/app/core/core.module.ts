import { CommonModule } from '@angular/common';
import {ErrorHandler, ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ToastrModule} from 'ngx-toastr';
import {BootstrapModule} from './bootstrap/bootstrap.module';
import {AplicationErrorHandler} from './handler/app.error-handler';
import {NotificationService} from './services/notification.service';

@NgModule({
  declarations: [],
  imports: [
    BootstrapModule,
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,

    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    })
  ],
  exports: [
    BootstrapModule,
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    ToastrModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: AplicationErrorHandler}
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [NotificationService]
    };
  }
}
