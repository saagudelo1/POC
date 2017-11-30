import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginMovilPage } from './login-movil';

@NgModule({
  declarations: [
    LoginMovilPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginMovilPage),
  ],
})
export class LoginMovilPageModule {}
