import { Component } from '@angular/core';
import { Login, SignUp } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  usertype=false;
  showLogin=false;
  constructor(private user:UserService){  }

  signup(data:SignUp){
    //console.warn(data);
    this.user.userSignup(data);
    this.usertype=true;
  }

  login(data:Login){
    //console.warn(data);
    //this.user.userLogin(data);
    this.usertype=true;
  }

  openlogin(){
    this.showLogin=true;
  }

  opensignup(){
    this.showLogin=false;
  }
  
}
