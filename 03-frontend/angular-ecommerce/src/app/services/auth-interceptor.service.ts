import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { request } from 'http';
import { from, lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private oktaAuthService: OktaAuthStateService, 
              @Inject(OKTA_AUTH) private oktaAuth: OktaAuth) { }

  intercept(request: HttpRequest<any>, 
            next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.handleAccess(request, next));
  }

  private async handleAccess(request: HttpRequest<any>, 
                             next: HttpHandler): Promise<HttpEvent<any>> {
  
    // Only add an access token for secured endpoints
    const securedEndpoints = ['http://localhost:8080/api/orders'];

    if (securedEndpoints.some(url => request.urlWithParams.includes(url))) {

      // get access token - async call
      const accessToken = await this.oktaAuth.getAccessToken();

      // clone request and add new header with access token
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer' + accessToken
        }
      });
    }

    // continue to other interceptors in chain
    // If none, continue to REST API
    return await lastValueFrom(next.handle(request));
  }
}
