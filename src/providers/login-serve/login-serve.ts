import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuariopComponent } from '../../components/usuariop/usuariop';

/*
  Generated class for the LoginServeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServeProvider {
  ServerUrl:string ="http://192.168.3.177:5000/";

  constructor(public http: HttpClient) {
    console.log('Hello LoginServeProvider Provider');
  }
  getUsers(usu:UsuariopComponent) {

  return this.http.post(this.ServerUrl, {
    username: usu.Username,
    password: usu.Password,
    client_id: "banistmoATM",
    grant_type:"password"
  });

}
  
}
