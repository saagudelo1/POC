import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {LoginWebPage } from '../pages/login-web/login-web';
import {BienvenidaWebPage } from '../pages/bienvenida-web/bienvenida-web';
import { MyApp } from './app.component';
import { LoginWebProvider } from '../providers/login-web/login-web';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    LoginWebPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginWebPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginWebProvider
  ]
})
export class AppModule {}
