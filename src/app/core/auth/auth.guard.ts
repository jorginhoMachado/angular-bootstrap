import {Injectable, Injector} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  private router: Router;
  private authService: AuthService;
  constructor(private injector: Injector) {
    this.router = injector.get(Router);
    this.authService = injector.get(AuthService);
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      return true;
    }
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }

}
