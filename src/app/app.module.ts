import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './auth/guard/authguard.guard';
import { AuthModule } from './auth/auth.module';
import { FeaturesModule } from './features/features.module';



const routes: Routes= [  
  { path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: 'home',
    canActivate:[AuthguardGuard],
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) 
  },

];

@NgModule({
  declarations: [
    AppComponent
  
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    RouterModule,
    FeaturesModule,
    AuthModule

    
  ],
  providers: [
  ],
  exports:[RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
