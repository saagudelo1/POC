import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BienvenidaMovilPageModule } from '../pages/bienvenida-movil/bienvenida-movil.module';
import { LoginMovilPage } from '../pages/login-movil/login-movil';
import { LoginMovilProvider } from '../providers/login-movil/login-movil';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //BienvenidaMovilPage,
    LoginMovilPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BienvenidaMovilPageModule
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
   // BienvenidaMovilPage,
    LoginMovilPage,
   
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginMovilProvider
  ]
})
export class AppModule {}
