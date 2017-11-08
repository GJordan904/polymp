import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class TransferResolverService implements Resolve<TransferStats> {

  constructor(private http: HttpClient, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): TransferStats | Observable<TransferStats> | Promise<TransferStats> {
    return this.http.get('/api/stats/transfer')
      .take(1)
      .map((stats: any) => {
        if(stats) {
          return stats;
        }else {
          // TODO Handle more gracefully
          this.router.navigate(['/dashboard/home']);
          return null;
        }
      })
  }
}
