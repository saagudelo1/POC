import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginWebPage } from '../pages/login-web/login-web';
import {BienvenidaWebPage } from '../pages/bienvenida-web/bienvenida-web';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginWebPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }
}

