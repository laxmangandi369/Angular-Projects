import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddNewProductComponent } from './product-list/add-new-product/add-new-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes= [
  {path: '', component:WelcomeComponent},
  {path: 'productlist', component: ProductListComponent},
  {path: 'newform', component : AddNewProductComponent},
  {path: 'productdetail', component: ProductDetailComponent},
  {path: 'detail/:productid', component: ProductDetailComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    AddNewProductComponent,
    ProductDetailComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
