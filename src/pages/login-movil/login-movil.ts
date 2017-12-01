import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'page-login-movil',
  templateUrl: 'login-movil.html',
})
export class LoginMovilPage {

  constructor(public router:Router) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginMovilPage');
  }
  goLogin():void{
    this.router.navigate(['/LoginMovil']);
    
  }


}
