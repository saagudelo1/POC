import { Component } from '@angular/core';
import { BienvenidaWebPage } from '../bienvenida-web/bienvenida-web'
import {LoginWebProvider} from '../../providers/login-web/login-web'
import { UsuariopComponent } from '../../components/usuariop/usuariop';
import { LoginServeProvider } from '../../providers/login-serve/login-serve';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


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
        var Resultado:JSON = JSON.parse(JSON.stringify(res["Resultado"]));
        if (Resultado["error"] != undefined)
          alert(Resultado["error"]);
          else{
          alert(Resultado);
          this.router.navigate(['/BienvenidaWeb']);
          }
      },
      err => {
        console.error(err);
        alert(JSON.parse(JSON.stringify(err)));
        console.log("Error occured");
      }
    );  

  }
  goMobile(){
    this.router.navigate(['/LoginMovil']);
  }
}
