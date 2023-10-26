import { Injectable,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from './user.model'; 

@Injectable({
  providedIn: 'root'
})
export class UserserviceService implements OnInit {

  //DB_URL='http://localhost:4000/list';
  baseURL: string = 'http://localhost:4000/list';
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // ngOnInit(): void { }

  // getdata():Observable<User[]>{
  //   return this.http.get<User[]>(this.DB_URL);
  // }

  // edit(val:User):Observable<User>{
  //   return this.http.put<User>(`${this.DB_URL}/${val.userId}`,val);
  // }

  // deletedata(userId:User):Observable<User>{
  //    return this.http.delete<User>(`${this.DB_URL}/${userId}`);
  // }

  // adddata(val:User):Observable<User>{
  //   return this.http.post<User>(this.DB_URL,val);
  // }

  



  getbooks():Observable<User[]>{
     return this.http.get<User[]>(this.baseURL);
  }

  deletebooks(bookId:Number):Observable<User>{
    return this.http.delete<User>(`${this.baseURL}/${bookId}`);
  }

  addbooks(val:User):Observable<User>{
    return this.http.post<User>(this.baseURL,val);
  }

  editbooks(val:User):Observable<User>{
    return this.http.put<User>(`${this.baseURL}/${val.userId}`,val);
  }


}
