import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private urlApi: string;
  public messager = new Subject<boolean>();
  public newsletter = new Subject<string>();
  
  constructor(private http: HttpClient) {
    this.urlApi = 'http://localhost:8080';
  }

  public registerUser(username: string, password: string){
    const body = {
      "email": username,
      "password": password,
      "firstName": "Test",
      "lastName": "Test",
      "pseudo": "test"
    };
    return this.http.post(`${this.urlApi}/api/auth/register`, body );
  }

  public logUser(username: string, password: string){
    const body = {
      "email": username,
      "password": password
    };
    return this.http.post(`${this.urlApi}/users/sign-in`, body );
  }


}
