import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user/user.component';
import { UserRegisterComponent } from './user-register/user-register.component';


@NgModule({
  declarations: [UserLoginComponent, UserComponent, UserRegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
