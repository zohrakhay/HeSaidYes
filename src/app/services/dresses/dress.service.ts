import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIS } from 'src/app/constantes/api';
import { DressesComponent } from 'src/app/dresses/dresses.component';
import { Dress } from 'src/app/models/dress/dress';

@Injectable({
  providedIn: 'root'
})
export class DressService {
  private   dresses: Dress[];
  constructor(  private http: HttpClient) { }




  getDresses(): Observable<Dress[]>{
    return this.http.get<Dress[]>(APIS.dresses);
  }

}
