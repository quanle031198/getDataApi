import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  id:number |any;
  infoDetail: any;

  constructor(private activatedRoute: ActivatedRoute ,public rs:RestService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
    });    
    this.getPostbyId(Number(this.id));
    
  }

  getPostbyId(id:number){

    this.rs.getPostbyId(id).subscribe((response) => {
      this.infoDetail = response;
    })
  }

}
