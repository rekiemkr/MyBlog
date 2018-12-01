import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class InfoPaginaService {
  public info: InfoPagina;
  public cargada: Boolean = false;
  constructor(private http: HttpClient) {
      this.cargarInfo();
  }
  private cargarInfo() {
    this.http
      .get("../../assets/data/dataPage.json")
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        console.log(this.info);
      });
  }
}
