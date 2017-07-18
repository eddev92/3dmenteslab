import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
			    apiKey: "AIzaSyA3valHdAH00FqEG5BjqrQid6qfp2jlcOA",
			    authDomain: "dmenteslab.firebaseapp.com",
			    databaseURL: "https://dmenteslab.firebaseio.com",
			    projectId: "dmenteslab",
			    storageBucket: "dmenteslab.appspot.com",
			    messagingSenderId: "823755930391"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
