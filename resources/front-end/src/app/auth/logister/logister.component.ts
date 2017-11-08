import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'logister',
  templateUrl: './logister.component.html',
  styleUrls: ['./logister.component.scss']
})
export class LogisterComponent implements OnInit {
  @Input('view')view: string;
  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: ''
    });
    this.registerForm = this.fb.group({
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        rePassword: ['', [Validators.required, Validators.minLength(6)] ]
      }, {validator: this.matchPasswords}),
      email: ['', [Validators.required, Validators.email], this.uniqueEmail],
    })
  }

  private matchPasswords(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('rePassword').value) {
      return {invalid: true};
    }
  }

  private uniqueEmail(c: AbstractControl) {
    return this.http.get(`/api/validate/email?${c.value}`)
      .map((res: any) => res.json().unique ? null : {value: c.value});
  }

  public login() {
    this.http.post('/auth/login', this.loginForm.value)
      .subscribe((resp: any) => {
        if(resp.success) {
          this.router.navigate(['/dashboard'])
        }
      })
  }

  public register() {

  }
}
