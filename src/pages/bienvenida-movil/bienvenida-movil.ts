import { Component, animate } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginMovilPage } from '../login-movil/login-movil';
import { UsuariopComponent } from '../../components/usuariop/usuariop';
import { LoginMovilProvider } from '../../providers/login-movil/login-movil';
import { LoginServeProvider } from '../../providers/login-serve/login-serve';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'page-bienvenida-movil',
  templateUrl: 'bienvenida-movil.html',
})
export class BienvenidaMovilPage {

  constructor(public servi:LoginMovilProvider,public _loginServer:LoginServeProvider,
    public router: Router) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BienvenidaMovilPage');
  }
//   goLogin():void{
//   console.log(this.UsuariopComponent);
//   if(this.servi.BuscarUsuario(this.UsuariopComponent))
//   this.navCtrl.push(LoginMovilPage);
// }
 UsuariopComponent:UsuariopComponent = new UsuariopComponent("","");

 goWeb():void{
  this.router.navigate(['/']);
  
 }
 goLogin():void{
  console.log(JSON.stringify(this._loginServer.getUsers(this.UsuariopComponent)));
  this.router.navigate(['/BienvenidaMovil']);
  
  // if(this._loginProv.BuscarUsuario(this.User)){
  //   this.navCntrl.push("BienvenidaWeb");
  // }
  // else
  //   alert('Usuario no valido');
}

}
