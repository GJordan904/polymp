import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpXsrfTokenExtractor} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class XsrfInterceptor implements HttpInterceptor {
  constructor(
    private tokenService: HttpXsrfTokenExtractor) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const lcUrl = req.url.toLowerCase();
    // Angular default implementation save for the fact we
    // do not skip GET requests
    if (req.method === 'HEAD' || lcUrl.startsWith('http://') ||
      lcUrl.startsWith('https://')) {
      return next.handle(req);
    }
    const token = this.tokenService.getToken();

    // Be careful not to overwrite an existing header of the same name.
    if (token !== null && !req.headers.has('X-XSRF-TOKEN')) {
      req = req.clone({headers: req.headers.set('X-XSRF-TOKEN', token)});
    }
    return next.handle(req);
  }
}