import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addproduct(data:product){
    //console.warn(data);
    return this.http.post('http://localhost:3000/products',data);
  }
  productlist(){
    return this.http.get<product[]>('http://localhost:3000/products');
  }
  deleteProduct(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  getProduct(id:string){
     return this.http.get<product>(`http://localhost:3000/products/${id}`);
  }
  updateProduct(product:product){
    return this.http.put<product>(`http://localhost:3000/products/${product.id}`,product);
  }
  popularProducts(){
    return this.http.get<product[]>('http://localhost:3000/products?_limit=3');
  }
  trendyProducts(){
    return this.http.get<product[]>('http://localhost:3000/products?_limit=8')
  }
  searchProducts(query:string){
    return this.http.get<product[]>(`http://localhost:3000/products?q=${query}`)
  }

}
