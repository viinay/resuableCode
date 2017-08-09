/*
  use CanActivate to restrict access to a particular route 
*/
//in main module

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//userdefined components-AdminPanel,Auth

@NgModule({
  imports:[
    RouterModule.forRoot([
      { path:'securedPage',component:AdminPanel,canActivate:[Auth]}
    ])
  ],
  providers:[Auth]
})

//in Auth service
import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';

@Injectable()
export class Auth implements CanActivate{
  constructor(private router:Router){}
  canActivate(){
    if(//someconditon to allow access){
      return true
    }else{
      this.router.navigate(['/accessDenied])
    }
  }
}
