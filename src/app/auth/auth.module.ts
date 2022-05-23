import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeaturesModule } from '../features/features.module';
import { AppComponent } from '../app.component';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';



const routes: Routes = [
  // { path: '',redirectTo:'login', pathMatch: "full" },
  // {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'', component: LoginComponent},
  {path: 'unauth', component: UnauthorizeComponent}

  // { path: 'welcome', component: WelcomeComponent,canActivate:[AuthguardGuard]}
];

@NgModule({
  declarations: [
    LoginComponent,
    UnauthorizeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    RouterModule,
    FormsModule
    


  ],
  exports:[
    LoginComponent,
    UnauthorizeComponent
  ],
  providers:[

  ],
  bootstrap:[AppComponent]
})
export class AuthModule { }
