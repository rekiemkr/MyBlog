import { Component, OnInit } from '@angular/core';
import { BlogPostService } from 'src/app/services/blog-post-service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(public servicio:BlogPostService) {
   }

  ngOnInit() {
  }

}
