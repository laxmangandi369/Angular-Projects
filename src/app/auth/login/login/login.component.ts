import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message='';
  loginForm !: FormGroup;
  didSubmit:boolean=false;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  passwordPattern ='(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}';
    constructor( private route:Router, private authService : AuthServiceService) {
      localStorage.clear();
     }

     
  
  ngOnInit(): void {
    this.loginForm= new FormGroup({
      username: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required])
    });
    
  }
  loginCheck()
  {
    this.didSubmit=true;
    // console.warn(this.loginForm.value);
    this.authService.checkLoginCred(this.loginForm.value.username,this.loginForm.value.pass);
  }
}
