import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginWebPage } from './login-web';
import { NavController } from 'ionic-angular';



@NgModule({
  declarations: [
    LoginWebPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginWebPage)
  ],
})
export class LoginWebPageModule {}
