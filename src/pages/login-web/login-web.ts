import { Component } from '@angular/core';
import { BienvenidaWebPage } from '../bienvenida-web/bienvenida-web'
import {LoginWebProvider} from '../../providers/login-web/login-web'
import { UsuariopComponent } from '../../components/usuariop/usuariop';
import { LoginServeProvider } from '../../providers/login-serve/login-serve';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


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
  
  User:UsuariopComponent = new UsuariopComponent("","");
  

  // Métodos
  constructor(
    public _loginProv:LoginWebProvider,
    public _loginServer:LoginServeProvider ,
    public router: Router) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BienvenidaWebPage');
  }

  


  GoBienvenida():void{
    this._loginServer.getUsers(this.User)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/BienvenidaWeb']);
      },
      err => {
        console.log("Error occured");
      }
    );  
    
    // if(this._loginProv.BuscarUsuario(this.User)){
    //   this.navCntrl.push("BienvenidaWeb");
    // }
    // else
    //   alert('Usuario no valido');
  }
  goMobile(){
    this.router.navigate(['/LoginMovil']);
  }
}
