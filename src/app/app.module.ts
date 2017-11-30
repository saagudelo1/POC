import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginWebProvider } from '../providers/login-web/login-web';
import {LoginWebPage } from '../pages/login-web/login-web';
import {BienvenidaWebPage } from '../pages/bienvenida-web/bienvenida-web';
import { MyApp } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginMovilProvider } from '../providers/login-movil/login-movil';
import { LoginMovilPage } from '../pages/login-movil/login-movil';
import { BienvenidaMovilPage } from '../pages/bienvenida-movil/bienvenida-movil';
import { LoginServeProvider } from '../providers/login-serve/login-serve';

@NgModule({
  declarations: [
    MyApp,
    LoginWebPage,
    LoginMovilPage


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
    
    LoginMovilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginWebProvider,
    LoginMovilProvider,
    LoginServeProvider
  ]
})
export class AppModule {}
