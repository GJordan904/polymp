import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from './shared.module';
import {ScrollService} from './services/scroll.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import {WelcomeModule} from './welcome/welcome.module';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HeadersInterceptor} from './http/headers-interceptor';
import {XsrfInterceptor} from './http/xsrf-interceptor';

@NgModule({
  providers: [
    ScrollService,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XsrfInterceptor,
      multi: true,
    }
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    WelcomeModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}