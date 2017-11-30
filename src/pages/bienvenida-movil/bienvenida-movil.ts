import { Component, animate } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginMovilPage } from '../login-movil/login-movil';
import { UsuariopComponent } from '../../components/usuariop/usuariop';
import { LoginMovilProvider } from '../../providers/login-movil/login-movil';


@IonicPage()
@Component({
  selector: 'page-bienvenida-movil',
  templateUrl: 'bienvenida-movil.html',
})
export class BienvenidaMovilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public servi:LoginMovilProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BienvenidaMovilPage');
  }
  goLogin():void{
  console.log(this.UsuariopComponent);
  if(this.servi.BuscarUsuario(this.UsuariopComponent))
  this.navCtrl.push(LoginMovilPage);
}
 UsuariopComponent:UsuariopComponent = new UsuariopComponent("","");

}
