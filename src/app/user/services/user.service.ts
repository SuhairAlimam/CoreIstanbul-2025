import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user'; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root'
})
export class UserService {
  get(): Observable<User[]> {
    return this.httpclient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }


  constructor(private httpclient: HttpClient) { }

  getUserById(id: number): Observable<User> {
    return this.httpclient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
