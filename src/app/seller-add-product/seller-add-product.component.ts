import { Component } from '@angular/core';
import {product} from '../data-type';
import { ProductService } from '../services/product.service';
import {HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  addproductmesaage:string | undefined;
  constructor(private product:ProductService,private router:Router){

  }
  submit(data:product){
    //console.warn(data);
    this.product.addproduct(data).subscribe((result)=>{
        //console.warn(result);
        if(result){
          this.addproductmesaage="product is successfuly added.";
          this.router.navigate(['/product-list']);
        }
        setTimeout(()=>{
          this.addproductmesaage=undefined;

        },3000)
    })
  }

}
