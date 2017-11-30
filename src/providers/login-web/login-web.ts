import { Injectable } from '@angular/core';
import{ UserModelComponent} from '../../components/user-model/user-model';
import {USUARIOS} from './mock-usuarios';

/*
  Generated class for the LoginWebProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginWebProvider {

  BuacarUsuario(usuario:UserModelComponent):boolean{
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
