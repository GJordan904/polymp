import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import {SharedModule} from '../shared.module';
import { PricingComponent } from './pricing/pricing.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

export const routes = [
  {
    path: '', component: WelcomeComponent, children: [
      { path: '', component: LandingComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'login', component: LoginComponent },
    ]
  }
];

@NgModule({
  declarations: [
    WelcomeComponent,
    PricingComponent,
    LandingComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class WelcomeModule {
  static routes = routes;
}
