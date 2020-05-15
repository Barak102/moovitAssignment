import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) { }

  register(user: User): void {
    this.http.post('http://localhost:3000/register/submit', { ...user }).subscribe(r => {
    });
  }

}
