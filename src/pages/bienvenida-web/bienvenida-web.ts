import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the BienvenidaWebPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name : 'BienvenidaWeb'} )
@Component({
  selector: 'page-bienvenida-web',
  templateUrl: 'bienvenida-web.html',
})
export class BienvenidaWebPage {
  constructor(public navCntrl: NavController) {
    
      }
  goLogin():void{
      this.navCntrl.pop();
  }

}

