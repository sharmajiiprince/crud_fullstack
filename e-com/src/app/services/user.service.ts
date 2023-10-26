import { Injectable } from '@angular/core';
import { Login, SignUp } from '../data-type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private route:Router) { }
  userSignup(user:SignUp){
    console.warn(user);
    this.http.post("http://localhost:3000/users",user,{observe:'response'}).subscribe((result)=>{
      //console.warn(result);
      if(result){
        localStorage.setItem('user',JSON.stringify(result.body));
        this.route.navigate(['/']);
      }
     })
  }
  // userReload(){
  //   if(localStorage.getItem('user')){
  //     this.route.navigate(['/']);
  //   }
  // }

  // userLogin(data:Login){
  //   console.warn(data);
  //    return this.http.get<SignUp[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((result)=>{
  //     if(result && result.body){
  //       //console.warn(result);
  //       localStorage.setItem('user',JSON.stringify(result.body[0]));
  //       this.route.navigate(['/']);
  //     }
  //    })
  // }
}
