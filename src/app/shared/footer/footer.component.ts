import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public fecha:number;
  public email:string;
  constructor( public _service:InfoPaginaService) { 
    this.fecha = new Date().getFullYear();
  }
  ngOnInit() {
  }

}
