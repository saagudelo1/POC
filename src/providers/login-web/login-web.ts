import { Injectable } from '@angular/core';
import {USUARIOS} from './mock-usuarios';
import { UsuariopComponent } from '../../components/usuariop/usuariop';

/*
  Generated class for the LoginWebProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginWebProvider {

  BuscarUsuario(usuario:UsuariopComponent):boolean{
    let result = USUARIOS.find(usu => {
      return usu.Username == usuario.Username && usu.Password == usuario.Password;
    });
    console.log(result);
    
    return result != undefined;
  }

  constructor() {
    console.log('Hello LoginWebProvider Provider');
  }

}
