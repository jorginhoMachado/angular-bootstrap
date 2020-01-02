import { CommonModule } from '@angular/common';
import {ErrorHandler, ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ToastrModule} from 'ngx-toastr';
import {BootstrapModule} from './bootstrap/bootstrap.module';
import {AplicationErrorHandler} from './handler/app.error-handler';
import {NotificationService} from './services/notification.service';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './auth/auth.guard';
import {JwtInterceptor} from './auth/jwt.interceptor';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDatabaseService} from './in-memory-api/in-memory-database.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BootstrapModule,
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabaseService),
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
    ToastrModule,
    LoginComponent
  ],
  providers: [
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: ErrorHandler, useClass: AplicationErrorHandler}
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [NotificationService, AuthGuard]
    };
  }
}
