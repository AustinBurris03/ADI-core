import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/users.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserRepository {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`/api/users/${id}`);
  }

}
