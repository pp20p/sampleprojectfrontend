import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedEmployee!: User;
  employees!: User[];
  readonly baseURL = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }
  postEmployee(emp: User) {
    return this.http.post(this.baseURL+'/register', emp);
  }

  getEmployeeList() {
    return this.http.get(this.baseURL);
  }
  

  putEmployee(emp:User) {
    return this.http.put(this.baseURL + `/${emp.id}`, emp);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
