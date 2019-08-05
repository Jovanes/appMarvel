import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireDatabaseModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB4ulqlN7mewXlMG7bvvQbSQqEY-MeLNAg",
   authDomain: "appmarvel22.firebaseapp.com",
   databaseURL: "https://appmarvel22.firebaseio.com",
   projectId: "appmarvel22",
   storageBucket: "appmarvel22.appspot.com",
   messagingSenderId: "821425547747",
   appId: "1:821425547747:web:74c077b300504ffc"
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
