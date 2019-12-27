import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError, from } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    httpClient: any;
    constructor(private snackBar: MatSnackBar) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(
                map((event: HttpEvent<any>) => event),
                catchError((error: HttpErrorResponse) => {
                    // let data = {};
                    const data = {
                        reason: error && error.error && error.error.reason ? error.error.reason : '',
                        status: error.status
                    };
                    // this.hideLoader();
                    if (data.status === 0) {
                      this.snackBar.open(
                        'An error connecting to the internet has occured. Check your network connection and try again.',
                        'Close'
                      );
                      return null;
                    }
                    console.log(data);
                    if (error.status === 404) {
                      this.snackBar.open(
                        'We were unable to get any data for your request',
                        'Close'
                      );
                      return null;
                    } else if (error.status >= 500) {
                      this.snackBar.open(
                        'Something bad has happened on our servers. We\'ll try to fix this as quicky as possible',
                        'Close'
                      );
                      return null;
                    }
                    return throwError(error);
                }));
    }
}
