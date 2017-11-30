import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BienvenidaMovilPage } from '../pages/bienvenida-movil/bienvenida-movil';
import { BienvenidaWebPage } from '../pages/bienvenida-web/bienvenida-web';
import { LoginWebPage } from '../pages/login-web/login-web';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginWebPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

