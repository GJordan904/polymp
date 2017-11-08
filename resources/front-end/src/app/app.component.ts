import { Component, OnInit } from "@angular/core";
import {AuthService} from './auth/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app',
    template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.auth.authCheck().subscribe((resp: any) => {
      console.log(resp);
      if(resp && this.router) {
        this.router.navigate(['/dashboard']);
      }
    })
  }
}