import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  //Login del Usuario para unirnos al sistema

  login(email:string, password: string): Observable<any>{
    let body = {
      email: email,
      password: password
    }
    
    return this._http.post('https://reqres.in/api/login', body);

  }
}
