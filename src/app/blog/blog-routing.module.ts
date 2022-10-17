import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RestComponent } from './rest/rest.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'product-list'},
  {path: 'product-list', component:RestComponent},
  {path: 'product-detail/:id', component: PostDetailComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class BlogRoutingModule { }
