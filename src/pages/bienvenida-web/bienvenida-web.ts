import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

/**
 * Generated class for the BienvenidaWebPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bienvenida-web',
  templateUrl: 'bienvenida-web.html',
})
export class BienvenidaWebPage {
  constructor(public router:Router) {
      }
  goLogin():void{
    this.router.navigate(['/']);
    
  }

}

