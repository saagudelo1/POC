import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage({name:'Bienvenido'})
@Component({
  selector: 'page-login-movil',
  templateUrl: 'login-movil.html',
})
export class LoginMovilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginMovilPage');
  }
 


}
