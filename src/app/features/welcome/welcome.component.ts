import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
 currentHour:number;
 display:string="some error";
 


 constructor() { 
    this.currentHour = new Date().getHours();
  }

  ngOnInit(): void {
   
  }
  greeting()
  {
    if(this.currentHour>=0 && this.currentHour<12 )
    {
        this.display="Good Morning!";
    }
    else if(this.currentHour>=12 && this.currentHour<18 )
    {
      this.display="Good AfterNoon!";
    }
    else if(this.currentHour>=18 && this.currentHour<=24)
    {
      this.display="Good Evening!";
    }
    return this.display;
  }
 
}
