import { Component } from "@angular/core";
import { InfoPaginaService } from "./services/info-pagina.service";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(public _infopagina: InfoPaginaService) {}
}
