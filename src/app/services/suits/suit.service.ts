import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIS } from 'src/app/constantes/api';
import { Suit } from 'src/app/models/suit/suit';

@Injectable({
  providedIn: 'root'
})
export class SuitService {

  private   suits: Suit[];
  constructor(  private http: HttpClient) { }




  getSuits(): Observable<Suit[]>{
    return this.http.get<Suit[]>(APIS.suits);
  }

}
