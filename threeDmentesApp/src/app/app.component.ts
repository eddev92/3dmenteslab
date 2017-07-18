import { Component, OnInit } from '@angular/core';
import { Student } from './core/consts';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Student]
})
	export class AppComponent implements OnInit {
	  user: Observable<firebase.User>;
	  items: FirebaseListObservable<any[]>;
	  msgVal: string = '';

  	constructor(public student: Student,
  				public afAuth: AngularFireAuth,
  				public af: AngularFireDatabase) {
  		this.items = af.list('/dmenteslab', {
      query: {
        limitToLast: 50
      }
    });

   	 this.user = this.afAuth.authState;
   	 console.log(this.user)

  	}
  	 
  	ngOnInit() {
  		// let name = this.student.name;
  		// let lastname = this.student.apellidos;
  		// let email = this.student.email;
  		// let phone = this.student.telefono;

  	}
  login() {
    this.afAuth.auth.signInAnonymously();
}


Send(desc: string) {
	let student: Student;
    this.items.push({ message: desc});
    let nombre = student.name;
    let apellido = student. apellidos;
    let email = student.email;
    let telefono = student.telefono;
  
}
  	registerStudent(values) {
  		console.log(values, 'usuario registrado')
  	}
}



