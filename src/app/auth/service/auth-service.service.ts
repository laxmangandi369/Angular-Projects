import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IProductList } from 'src/app/Iproduct-list';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isLoggedin: boolean=false;
 user:any;
  constructor(private http: HttpClient, private router : Router ) { }
  
  
  checkLoginCred(username: string, password: string)
  {
    this.http.get<any>('http://localhost:3000/loginUser').subscribe((response)=>{
       this.user = response.find((data:any)=>{
        return (data.username === username && data.pass === password)?true:false;
      });
      // console.warn(this.user);
      if(this.user){
        alert("login successful");
        this.isLoggedin= true;
        this.router.navigate(['home']);
      }
      else
      {
           alert("wrong credientials");
            this.router.navigate(['login']);
      }
    });
  }

  isUserLoggedIn()
  {
    return this.isLoggedin;
  }
}

