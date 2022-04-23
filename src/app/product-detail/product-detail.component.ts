import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit 
{
  public productDetailsData:any = [];
  constructor(private apiService:ApiService, private router: Router, private route:ActivatedRoute,private http : HttpClient) {
   }

  productid:any;

  ngOnInit(): void {
    this.productid = this.route.snapshot.params['productid'];
    console.log(this.productid);


    this.http.get('http://localhost:3000/posts/'+this.productid).subscribe(resp =>{
      this.productDetailsData= resp;
    }); 
    
  }
  getSingleData()
  {
    this.apiService.findDetails(this.productid).subscribe(res =>{
      console.log(res);
      this.productDetailsData=res;
    });
    this.http.get('http://localhost:3000/posts/'+this.productid).subscribe(resp =>{
      console.log(resp);
    });  
  }
}