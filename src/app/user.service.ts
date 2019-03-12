import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface User{
  email: string;
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL = "http://localhost:9090/user"
  constructor(
    private http: HttpClient
  ) { }

  createUser = (data:User)=> this.http.post(`${this.BASE_URL}/new`, data)
}
