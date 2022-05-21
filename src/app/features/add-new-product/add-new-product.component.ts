import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProductList } from 'src/app/Iproduct-list';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {
   topics=['Mobile','Laptop',"Desktop",'Television','Speakers','Massagers','Headsets'];
   formdetails !:FormGroup;
  productObject:IProductList={
    id : 0,
    productid:0,
    name:'',
    category:'',
    price:'',
    serial_no:'',
    release_date:'',
    stock_unit:'',
     desc:''
  };
     
  @Input() placeHolder : string='';
  @Input() inputType : string='text'; 
  @Input() control !: FormControl;
  constructor(private apiService:ApiService, private router: Router) {
    
   }
   
   
  ngOnInit(): void {
    
    this.formdetails=new FormGroup({
      productid: new FormControl('',[Validators.required, Validators.pattern('[0-9]*')]),
      name: new FormControl('',[Validators.required,Validators.maxLength(30)]),
      category: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required]),
      serial_no: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]),
      release_date: new FormControl('',[Validators.required]),
      stock_unit: new FormControl('',[Validators.required]),
      desc: new FormControl('',[Validators.required, Validators.maxLength(150)])
    })

    
  }
  validAll()
  {

  }
// showError()
// {
//   const{touched,dirty,errors}= this.control;
//   return touched && dirty && errors;
  
// }

  clickAddProduct()
  {
    let url = 'posts';
    let apidata = this.formdetails.value;

    this.postProductDetails();
    this.apiService.postProduct(url,apidata).subscribe(response => {
     
      alert("New Product Added");
    });
    this.router.navigate(['/productlist']);
  }
   postProductDetails(){
    
    this.productObject.id=this.formdetails.value.productid;
    this.productObject.name=this.formdetails.value.username;
    this.productObject.category=this.formdetails.value.category;
    this.productObject.price=this.formdetails.value.price;
    this.productObject.serial_no=this.formdetails.value.serial_number;
    this.productObject.release_date=this.formdetails.value.date;
    this.productObject.stock_unit=this.formdetails.value.stock_unit;
    this.productObject.desc=this.formdetails.value.desc;  

    return this.productObject;
  }

}



