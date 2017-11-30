import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoginServeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServeProvider {
  ServerUrl:string ="http://192.168.3.192:5000/";

  constructor(public http: HttpClient) {
    console.log('Hello LoginServeProvider Provider');
  }
  getUsers() {
    var params = {
      username: "diego",
      password: "Banistmo123",
      client_id: "banistmoATM",
      grant_type:"password"
    };

    return this.http.post(this.ServerUrl,params);
  }
}
