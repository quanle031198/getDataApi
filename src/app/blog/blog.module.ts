import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { BlogRoutingModule } from './blog-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RestComponent } from './rest/rest.component';



@NgModule({
  declarations: [
    PostDetailComponent,
    RestComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BlogRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    FormsModule

  ],
  exports: [
    // RestComponent
  ]
})
export class BlogModule { }
