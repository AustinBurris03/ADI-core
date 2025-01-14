import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '../services/notification.service';
import { AuthenticationService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private notificationService: NotificationService,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let userMessage = '';

        if (error.error instanceof ErrorEvent) {
          userMessage = `Network error: ${error.error.message}`;
        } else {
          switch (error.status) {
            case 400:
              userMessage = 'Bad Request';
              break;
            case 401:
              userMessage = 'Unauthorized. Please log in again.';
              this.authService.logout();
              this.router.navigate(['/login']);
              break;
            case 403:
              userMessage = 'Forbidden. You do not have permission.';
              break;
            case 404:
              userMessage = 'Resource not found.';
              break;
            case 500:
              userMessage = 'Internal Server Error. Please try again later.';
              break;
            default:
              userMessage = `Unexpected error: ${error.statusText}`;
          }
        }

        console.error('HTTP Error:', error);

        this.notificationService.showError(userMessage);

        return throwError(() => error);
      })
    );
  }
}
