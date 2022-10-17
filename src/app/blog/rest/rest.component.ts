import { Component, OnInit } from '@angular/core';
import { Products } from '../product';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent implements OnInit {
  products: any;
  name: any;
  p:number = 1;
  constructor(public rs:RestService) { }

  ngOnInit(): void {
    this.rs.getAll().subscribe((response) => {
      this.products = response.data 
    })
  }

  search() {
    if (this.name == ''){
      this.ngOnInit();
    }else {
      this.products = this.products.filter((res: any) => {
        return res.name.trim().toUpperCase().match(this.name.trim().toUpperCase());
      });
    }
  }
  
  // key:string = 'id'
  // reverse: boolean = false;
  // sort(key:any){
  //   this.key = key;
  //   this.reverse = !this.reverse

  // }

}
