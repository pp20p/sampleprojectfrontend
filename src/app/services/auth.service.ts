import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { User } from '../models/user';
import { LocalstorageService } from './localstorage.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURLUsers= 'http://localhost:3000/users'
  constructor( private http: HttpClient,
    private token: LocalstorageService,
    private router: Router) { }
    login(email: string, password: string): Observable<User> {
      return this.http.post<User>(`${this.apiURLUsers}/login`, { email, password });
    }
  
    logout() {
      this.token.removeToken();
      this.router.navigate(['/login']);
    }
  
}
