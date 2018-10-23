import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public textHome:Array<String> = [
    ''
  ];

  constructor() { 
    this.textHome = [
      'Bienvenido a mi blog, soy Cristian Vargas estudiante de ingenieria de sistemas, la idea de este espacio es compartir una nota diaria acerca de programación y basicamente tecnologia de interes general.',
      'Si deseas enterarte de todas las actualizaciones del blog, suscribete para recibir notificaciones',
      'Suscribirme ->'     
  
    ]
  }
    

  ngOnInit() {
  }

}
