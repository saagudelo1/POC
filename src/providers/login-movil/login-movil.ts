
import { Injectable } from '@angular/core';
import { UsuariopComponent } from '../../components/usuariop/usuariop';
import { Usuarios } from '../mock-usuarios'


@Injectable()
export class LoginMovilProvider {

  BuscarUsuario(usuario: UsuariopComponent): boolean {
    let result = Usuarios.find(usu => {
      return (usu.Username == usuario.Username && usu.Password == usuario.Password)
    }
    )
    return result != undefined;

  }

  constructor() {
    console.log('Hello LoginMovilProvider Provider');
  }

}
