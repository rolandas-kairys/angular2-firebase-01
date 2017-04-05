import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdduserComponent } from './components/adduser/adduser.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDXzk48nZXCQ4ciIJvzk-Rg9B33KIF-dVc",
  authDomain: "contacts-d0aab.firebaseapp.com",
  databaseURL: "https://contacts-d0aab.firebaseio.com",
  storageBucket: "contacts-d0aab.appspot.com",
  messagingSenderId: "392078188679"
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
