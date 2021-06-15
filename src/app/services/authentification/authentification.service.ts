import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { APIS } from 'src/app/constantes/api';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
    private http: HttpClient

  ) { }

  login(credentials): Observable<any>{
    return this.http.post<any>(APIS.authentification + '/login', credentials);
  }

  signUp(credentials): Observable<any>{
    return this.http.post<any>(APIS.authentification, credentials);
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthentificated(): boolean {
    return !!localStorage.getItem('token');
  }
}
