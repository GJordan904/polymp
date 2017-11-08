import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import {User} from './user';

@Injectable()
export class AuthService {
  private user: User;
  private authenticated: boolean;
  private destinationUrl: string;

  constructor(private http: HttpClient) { }

  authCheck(): Observable<boolean> {
    if(this.user) {
      return Observable.of(true);
    }
    return this.http.get('/auth/check')
      .map((resp: any) => {
        let response = false;
        if(resp.authenticated) {
          this.user = resp.authenticated;
          response = true;
        }
        this.authenticated = response;
        return response;
      })
      .first();
  }

  setUrl(url: string): void {
    this.destinationUrl = url;
  }

}
