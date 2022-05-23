import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { BrowserModule } from '@angular/platform-browser';
import { AddNewProductComponent } from './add-new-product/add-new-product.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../auth/login/login/login.component';
import { AuthModule } from '../auth/auth.module';
import { AuthguardGuard } from '../auth/guard/authguard.guard';
import { UnauthorizeComponent } from '../auth/unauthorize/unauthorize.component';


const routes: Routes = [
  // { path: '', component: WelcomeComponent },
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path: 'home', component:WelcomeComponent, canActivate:[AuthguardGuard]},
  {path: 'productlist', component: ProductListComponent, canActivate:[AuthguardGuard]},
  {path: 'newform', component : AddNewProductComponent, canActivate:[AuthguardGuard]},
  {path: 'productdetail', component: ProductDetailComponent, canActivate:[AuthguardGuard]},
  {path: 'detail/:id', component: ProductDetailComponent, canActivate:[AuthguardGuard]},
  {path: '**', component: ErrorpageComponent},
];

@NgModule({
  declarations: [
    WelcomeComponent,
    ProductDetailComponent,
    ProductListComponent,
    AddNewProductComponent,
    ErrorpageComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    RouterModule
  ]
})
export class FeaturesModule { }
