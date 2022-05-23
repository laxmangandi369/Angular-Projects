import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IProductList } from '../Iproduct-list';

@Injectable({
  providedIn: 'root'
})
export class ApiService 
{
  API_URL = environment.API_URL;
  product:any;
  status:string='';
  constructor(private http: HttpClient) { 
    // console.log(http.get<IProductList>();
  }

  postProduct(url:any ,data : any) : Observable<any>
  {
    return this.http.post(this.API_URL+url,data);
  }
  getProduct(url:any)
  {
    return this.http.get(this.API_URL+url);
  }
  findDetails(productid:any) 
  {
    return this.http.get('http://localhost:3000/posts/'+productid);
  } 
  deleteProduct(id:number)
  {
    this.http.delete(this.API_URL+'posts/'+id);
  }
  // updateProduct(data: any, id: number){
  //   return this.http.put<any>("http://localhost:3000/posts"+id,data).map((res:any)=>{
  //     return res;
  //   })
  // }
  // deleteProduct(id:number){
  //   return this.http.delete<any>("http://localhost:3000/posts/"+id).pipe(map(res =>{
  //     return res.json();
  //   }))
  // }
}
