import { Component, animate } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginMovilPage } from '../login-movil/login-movil';


/**
 * Generated class for the BienvenidaMovilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bienvenida-movil',
  templateUrl: 'bienvenida-movil.html',
})
export class BienvenidaMovilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BienvenidaMovilPage');
  }
  goLogin():void{
  console.log("entro")
  this.navCtrl.push(LoginMovilPage);
}

}
