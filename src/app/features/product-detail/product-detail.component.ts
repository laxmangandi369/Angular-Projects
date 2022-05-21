import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit 
{
  public productDetailsData:any = [];
  constructor(private apiService:ApiService, private route:ActivatedRoute) {
   }

  productid!:number;

  ngOnInit(): void {
    this.productid = this.route.snapshot.params['id'];
  
    console.log(this.productid)
    // this.getSingleData();
  }
  getSingleData()
  {
    this.apiService.findDetails(this.productid).subscribe(res =>{
      this.productDetailsData=res;
    });
     
  }
  
}