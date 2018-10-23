import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  public info:InfoPagina;
  public cargado:boolean;

  constructor(private http:HttpClient) { 
    this.http.get('../../assets/data/dataPage.json')
      .subscribe((resp:InfoPagina) =>{
          this.cargado = true;
          this.info = resp;
      });
  }
}
