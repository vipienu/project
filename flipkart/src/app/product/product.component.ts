import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  public productlist:any;
  constructor(private api:ApiService){}

  ngOnInit():void{

    this.api.getProduct()
    .subscribe(res=>{
      this.productlist=res;
    })
  }
  
}
