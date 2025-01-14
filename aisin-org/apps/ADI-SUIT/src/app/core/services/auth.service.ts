import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<User> {
    return this.http.post<User>('/api/auth/login', credentials).pipe(
      tap((user) => {
        this.currentUserSubject.next(user);
        localStorage.setItem('authToken', user.token); // Assuming 'token' is part of User
      })
    );
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.currentUserSubject.next(null);
  }

  register(userData: any): Observable<User> {
    return this.http.post<User>('/api/auth/register', userData).pipe(
      tap((user) => {
        this.currentUserSubject.next(user);
        localStorage.setItem('authToken', user.token);
      })
    );
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
