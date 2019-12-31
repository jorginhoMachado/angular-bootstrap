import {EventEmitter, Injectable, Injector} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class NotificationService {
  notifier = new EventEmitter<string>();
  constructor(private  injector: Injector) { }
  notify(message: string, type?: string) {
    switch (type) {
      case 'success':
        this.injector.get(ToastrService).success(message);
        break;
      case 'info':
        this.injector.get(ToastrService).info(message);
        break;
      case 'warning':
        this.injector.get(ToastrService).warning(message);
        break;
      case 'error':
        this.injector.get(ToastrService).error(message);
        break;
      default:
        this.injector.get(ToastrService).error(message);
    }
    this.notifier.emit(message);
  }
}
