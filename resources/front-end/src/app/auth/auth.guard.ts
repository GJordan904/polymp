import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationExtras,
  CanLoad, Route
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from './auth.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  canLoad(route: Route) {
    let url = `/${route.path}`;

    return this.checkLogin(url);
  }

  private checkLogin(url: string): Observable<boolean> {
    return this.auth.authCheck()
      .map((resp: boolean) => {
        if(!resp) {
          this.auth.setUrl(url);
          let extras: NavigationExtras = {
            queryParams: { 'redirect': true }
          };
          this.router.navigate(['/welcome/login'], extras);
        }
        return resp;
      })
      .first();
  }
}
