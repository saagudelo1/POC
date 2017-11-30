import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BienvenidaWebPage } from './bienvenida-web';

@NgModule({
  declarations: [
    BienvenidaWebPage,
  ],
  imports: [
    IonicPageModule.forChild(BienvenidaWebPage),
  ],
})
export class BienvenidaWebPageModule {}
