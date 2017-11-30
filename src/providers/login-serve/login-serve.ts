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
  ServerUrl:string ="http://localhost:5000/";

  constructor(public http: HttpClient) {
    console.log('Hello LoginServeProvider Provider');
  }
  getUsers(usu:UsuariopComponent) {

  //   return this.http.post(this.ServerUrl,params).subscribe(() => {
  //     console.log("hola")
  // },
  // err => {
  //   console.log(err)
  // });
  this.http.post("http://192.168.3.177:5000/", {
    username: usu.Username,
    password: usu.Password,
    client_id: "banistmoATM",
    grant_type:"password"
  })
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );  

}
  
}
