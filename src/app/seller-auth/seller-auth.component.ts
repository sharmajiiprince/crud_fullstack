import { Component,OnInit} from '@angular/core';
import { SellerService } from '../services/seller.service';
import {Router} from '@angular/router'
import { Login, SignUp } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  showLogin=false;
  authError:string='';
  constructor(private seller:SellerService,private router:Router){

  }
  ngOnInit():void{
    this.seller.reloadSeller()
 }
  signUp(data:SignUp):void{
    //console.warn(data);
    this.seller.usersignUp(data);
    // this.seller.usersignUp(data).subscribe((result)=>{
    //   console.warn(result);
    //   if(result){
    //     this.router.navigate(['seller-hoome'])
    //   }
    // });
  }
  login(data:Login):void{
    //console.warn(data);
    this.authError="";
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((iserror)=>{
       if(iserror){
         this.authError="Email and Password is Invalid!";
       }
    })
  }


  openlogin(){
this.showLogin=true;
  }
  openSignup(){
    this.showLogin=false;
  }
}
