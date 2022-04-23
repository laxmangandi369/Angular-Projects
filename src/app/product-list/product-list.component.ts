import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import posts from '../../../db.json';
import { ApiService } from '../service/api.service';
import { IProductList } from './Iproduct-list';

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
            // console.log(data1);
            });

    }
  ngOnInit(): void {
    this.productid = this.route.snapshot.params['productid'];
    console.log(this.productid);
    
  }


  getSingleData()
  {
    this.apiService.findDetails(this.productid).subscribe(res =>{
     console.log(res);
     this.productDetailsData=res;
 });
  }
}


@Injectable({
  providedIn:'root'
})
export class UserService{
  constructor(private http: HttpClient)
  {

  }
  getData() : Observable<any>
  {
   let myurl = "http://localhost:3000/posts";
   return this.http.get<any>(myurl);
  }
}
