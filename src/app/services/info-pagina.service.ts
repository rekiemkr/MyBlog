import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService{
  public info:InfoPagina;
  constructor(private http:HttpClient) { 
    this.cargarInfo();
  }
  private cargarInfo(){
    this.http.get('../../assets/data/dataPage.json')
    .subscribe((resp:InfoPagina) =>{
        this.info = resp;
    });
  }
}
