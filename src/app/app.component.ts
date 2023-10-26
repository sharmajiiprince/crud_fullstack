import { Component,OnInit } from '@angular/core';
import { User } from './user.model';
import { UserserviceService } from './userservice.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // usersdet!:User[];
  // flag=true;

  // constructor(private service:UserserviceService){}

  // ngOnInit(): void {
  //   this.getuser();
  // }
  // getuser(){
  //   this.service.getdata().subscribe((data)=>{
  //     this.usersdet=data;
  //   })
  // }

  // setuser(val:User){
  //   console.log(val);
  //   this.service.adddata(val).subscribe((data)=>{
  //       this.usersdet.push(data);
  //   })
  // }

  bookdetails!:User[];
  selectedUser:any|null;
  id!:Number;
  flag=true;
  message='this id is allready exist!';

  constructor(private  service:UserserviceService,router:Router){}


  ngOnInit(): void {
    this.getdata();
  }
  getdata(){
    this.service.getbooks().subscribe((data)=>{
      this.bookdetails=data;
    })
  }

  deletedata(bookId:Number){
    this.service.deletebooks(bookId).subscribe(()=>{
      for(var i=0;i<this.bookdetails.length;i++){
        if(this.bookdetails[i].userId===bookId){
          this.bookdetails.splice(i,1);
        }
      }
    })
  }

  setdata(val:User){
    for(var i=0;i<this.bookdetails.length;i++){
      if(this.bookdetails[i].userId==val.userId){
        this.flag=false;
      }
    }
    if(this.flag){
      this.service.addbooks(val).subscribe((data)=>{
        this.bookdetails.push(data);
      })
    }
    
}

editdata(val:User){
this.id=val.userId;
this.selectedUser={...val}
}

evalute(){
   this.service.editbooks(this.selectedUser).subscribe((data)=>{
    console.log(data);
    for(var i=0;i<this.bookdetails.length;i++){
      if(this.bookdetails[i].userId==this.id){
        this.bookdetails[i]={...this.selectedUser}
      }
    }
   })
}

erase(){
  this.selectedUser=null;
}

}
