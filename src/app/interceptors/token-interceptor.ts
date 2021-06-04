import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let intReq = req;
        const token = this.authService.getToken();

        if (token) {
            intReq = req.clone({ headers: req.headers.set('x-auth-token', token)});
        }

        return next.handle(intReq);
    }

}

export const interceptorProvider = [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: TokenInterceptor,
      multi : true
    }
];