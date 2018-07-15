import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { PrefPage } from '../pages/pref/pref';
import { InfoPage } from '../pages/info/info';
import { TabsPage } from '../pages/tabs/tabs';

import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrefPage,
    InfoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrefPage,
    InfoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    FirebaseServiceProvider 
  ]
})
export class AppModule {}
