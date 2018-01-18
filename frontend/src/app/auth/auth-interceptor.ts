import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class AllInterceptor implements HttpInterceptor {
    baseUrl: string = 'http://localhost:8000';

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newReq = req.clone({
            url: this.baseUrl + req.url,
            headers: this.jwt(req.headers)
    });
        return next.handle(newReq);
    }

    private jwt(headers: HttpHeaders) {
        // create authorization header with jwt token
        let tokenObject = JSON.parse(localStorage.getItem('token'));
        if (tokenObject && tokenObject.access_token) {
            return headers
                .set('Authorization', 'Bearer ' + tokenObject.access_token)
                .set('Content-Type', 'application/json');
        }
        else return headers.set('Content-Type', 'application/json');
    }

}