import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {NotificationService} from '../services/notification.service';

@Injectable()
export class AplicationErrorHandler extends ErrorHandler {
  constructor(private injector: Injector) {
    super();
  }

  handleError(errorResponse: HttpErrorResponse | any) {
    const ns = this.injector.get(NotificationService);
    const erroInesperado = 'Ocorreu um erro inesperado.';
    if (errorResponse instanceof HttpErrorResponse) {
      switch (errorResponse.status) {
        case 400:
          errorResponse.error && errorResponse.error.message ?
            ns.notify(errorResponse.error.message) : ns.notify(erroInesperado);
          break;
        case 403:
          ns.notify('Não autorizado.');
          break;
        case 404:
          ns.notify('Recurso não encontrado. Verifique o console para mais detalhes');
          break;
        case 406:
          errorResponse.error.message && errorResponse.error ?
            ns.notify(errorResponse.error.message) : ns.notify(erroInesperado);
          break;
        case 422:
          ns.notify(erroInesperado);
          break;
        case 500:
          ns.notify('Ocorreu um erro no servidor.');
          break;
      }
    } else {
      ns.notify(erroInesperado);
    }
    super.handleError(errorResponse);
  }
}
