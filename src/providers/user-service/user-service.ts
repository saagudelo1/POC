import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {
  ServerUrl:string ="http://localhost:5000/";

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }
  getUsers() {
    var params = {
      username: "diego",
      password: "Banistmo123",
      client_id: "banistmoATM",
      grant_type:"password"
    };

    return this.http.post("http://localhost:5000/",params)
   //this.http.get(this.ServerUrl);

    
  }

}
