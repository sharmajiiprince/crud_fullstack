import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-seller-hoome',
  templateUrl: './seller-hoome.component.html',
  styleUrls: ['./seller-hoome.component.css']
})
export class SellerHoomeComponent {
  productList:undefined | product[];
  productMessage:undefined |string;
  icon=faTrash;
  editicon=faEdit;
  constructor(private product:ProductService){

  }
  ngOnInit():void{
    this.list();
  }
  deleteproduct(id:number){
    //console.warn('test id:',id);
    this.product.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.productMessage="product id deleted successfuly.";
        this.list();
      }
       setTimeout(()=>{
        this.productMessage=undefined;
       })
    })
  }
  list(){
    this.product.productlist().subscribe((result)=>{
      console.warn(result);
      this.productList=result;
    })
  }

}
