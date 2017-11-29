import { Component } from '@angular/core';
import {UserModelComponent} from '../../components/user-model/user-model'

/**
 * Generated class for the LoginWebPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login-web',
  templateUrl: 'login-web.html',
})
export class LoginWebPage {

  // Declaraciones 

  User:UserModelComponent = new UserModelComponent();
  

  // Métodos
  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BienvenidaWebPage');
  }

  
}
