import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api.service';


interface Posts{
  id:number;
  name:string;
  price:string;
  serial_no:string;
  release_date:string;
  stock_unit:string;
  desc:string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products:any;
  productid:any;
 productDetailsData:any;
  
  // constructor(private data:UserService ) { 
   
  //   this.data.getData().subscribe(data1=>{ 
  //     this.products=data1
  //     });
    
  // }
    constructor(private apiService:ApiService , private router: Router, private route:ActivatedRoute)
    {
      let url = 'posts';
      this.apiService.getProduct(url).subscribe(data1=>{ 
            this.products=data1
            console.log(this.products);
            });

    }
  ngOnInit(): void {
    
    
  }
  

  getSingleData()
  {
    this.apiService.findDetails(this.productid).subscribe(res =>{
     console.log(res+" hey");
     this.productDetailsData=res;
 });
  }
}



