import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  public info:InfoPagina;
  public blog:BlogPost;

  constructor(private http:HttpClient) { 
    this.cargarInfo();
    this.cargarBlog();
  }

  private cargarInfo(){
    this.http.get('../../assets/data/dataPage.json')
    .subscribe((resp:InfoPagina) =>{
        this.info = resp;
    });
  }

  private cargarBlog(){
    this.http.get('https://blog-cristian.firebaseio.com/blog-post.json')
    .subscribe((resp:BlogPost )=>{
        this.blog = resp;
        console.log(this.blog);
    });

  }
}
