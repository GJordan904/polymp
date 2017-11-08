import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `<div class="login-row">
      <div class="login-col">
          <logister view="login"></logister>
      </div>
  </div> `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
