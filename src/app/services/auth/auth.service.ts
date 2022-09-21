import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../../models/User';
import {environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public register (user: User): Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}Auth/register`,user)
  }

  public login (user: User): Observable<any>{
    return this.http.post(`${environment.apiUrl}Auth/login`,user,{
      responseType: 'text'
    })
  }

  public getMe(): Observable<string>{
    return this.http.get(`${environment.apiUrl}Auth`, {
      responseType: 'text'
    })
  }

}
