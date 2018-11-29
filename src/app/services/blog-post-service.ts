import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BlogPostService{
  public blog:BlogPost;
  constructor(private http:HttpClient) { 
    this.cargarBlog();
  }
  
  private cargarBlog(){
    this.http.get('https://blog-cristian.firebaseio.com/blog-post.json')
    .subscribe((resp:BlogPost )=>{
        this.blog = resp;
    });
  }
}
