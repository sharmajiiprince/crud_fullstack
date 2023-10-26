import { EventEmitter, Injectable,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SignUp,Login} from '../data-type';
import { BehaviorSubject } from 'rxjs';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerService implements OnInit{
  //isSellerLoggedIn: any;
  isSellerLoggedIn=new BehaviorSubject<boolean>(false);
  isLoginError=new EventEmitter<boolean>(false);

  constructor(private http:HttpClient,private router:Router) { }
  ngOnInit(): void {

  }
  usersignUp(data:SignUp){
    //console.warn("services called!");
    this.http.post('http://localhost:3000/seller',data,{observe:'response'}).subscribe((result)=>{
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body));
      this.router.navigate(['/seller-hoome']);
      //console.warn("result",result);
    })
  //return false;
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['/seller-hoome']);
    }
  }

  userLogin(data:Login){
    //console.warn(data);
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((result:any)=>{
      //console.warn(result);
      if(result && result.body && result.body.length){
        //console.warn('user login successfully.')
        localStorage.setItem('seller',JSON.stringify(result.body));
      this.router.navigate(['/seller-hoome']);
      }else{
        console.warn('invalid id & password');
        this.isLoginError.emit(true);
      }
    })
  }

}
