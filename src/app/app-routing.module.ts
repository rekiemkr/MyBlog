import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';

    const app_routes: Routes = [
        { path: 'home', component: HomeComponent},
        { path: 'contact', component: ContactComponent},
        { path: 'blog', component: BlogComponent},
        { path: 'blogPost', component: BlogPostComponent},
        { path: 'register', component: RegisterComponent},
        { path: '**', pathMatch: 'full', component: BlogComponent}
        
    ];

 @NgModule({
        imports:[
            RouterModule.forRoot(app_routes, {useHash: true})
        ],
        exports:[
            RouterModule
        ],
 })
    
export class AppRoutingModule {}
