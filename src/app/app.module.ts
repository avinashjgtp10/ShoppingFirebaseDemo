import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';
import { HttpClientModule, HttpClient } from '@angular/common/http';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBCDZywVB6KIctSN4iSHojOpeMh9xOI9hY",
    authDomain: "shopping-c2718.firebaseapp.com",
    databaseURL: "https://shopping-c2718.firebaseio.com",
    projectId: "shopping-c2718",
    storageBucket: "shopping-c2718.appspot.com",
    messagingSenderId: "946888239243"
  };
  


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
