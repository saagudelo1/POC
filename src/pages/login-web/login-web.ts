import { Component } from '@angular/core';
import {UserModelComponent} from '../../components/user-model/user-model'
import { BienvenidaWebPage } from '../bienvenida-web/bienvenida-web'
import { NavController } from 'ionic-angular/navigation/nav-controller';
import {LoginWebProvider} from '../../providers/login-web/login-web'


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
  constructor(public navCntrl: NavController, public _loginProv:LoginWebProvider ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BienvenidaWebPage');
  }

  

  Verificar(){
    console.log(this.User);

  }

  GoBienvenida():void{
    if(this._loginProv.BuacarUsuario(this.User)){
      this.navCntrl.push("BienvenidaWeb");
    }
    else
      alert('Usuario no valido');
  }
}
