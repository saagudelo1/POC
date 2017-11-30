import { Component } from '@angular/core';
import { BienvenidaWebPage } from '../bienvenida-web/bienvenida-web'
import {LoginWebProvider} from '../../providers/login-web/login-web'
import { UsuariopComponent } from '../../components/usuariop/usuariop';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the LoginWebPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage({name : 'LoginWeb'} )
@Component({
  selector: 'page-login-web',
  templateUrl: 'login-web.html',
})
export class LoginWebPage {
  

  // Declaraciones 
  
  User:UsuariopComponent = new UsuariopComponent("","");
  

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
    if(this._loginProv.BuscarUsuario(this.User)){
      this.navCntrl.push("BienvenidaWeb");
    }
    else
      alert('Usuario no valido');
  }
  goMobile(){
    this.navCntrl.push("Loginmovil");
  }
}
