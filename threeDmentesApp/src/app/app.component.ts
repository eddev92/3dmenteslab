import { Student } from './core/consts';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import {Injectable} from '@angular/core'
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [Student]
})
export class AppComponent implements OnInit {
    user: Observable<firebase.User>;
    items: FirebaseListObservable<any[]>;
    msgVal: string = '';

  constructor(private http: Http,
             public student: Student,
          public afAuth: AngularFireAuth,
          public af: AngularFireDatabase) {
      this.items = af.list('/dmenteslab/alumnos', {
      query: {
        limitToLast: 50
      }
    });

      this.user = this.afAuth.authState;
      console.log(this.user) 

}

    ngOnInit() {
      let student: Student;
       let name = this.student.name;
       let lastname = this.student.apellidos;
       let email = this.student.email;
       let phone = this.student.telefono;

}
//   login() {
//     this.afAuth.auth.signInAnonymously();
// }

  sendEmail() {

    let url = `https://console.firebase.google.com/project/dmenteslab/overview`
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

    params.set('to', 'edwarllanca@hotmail.com');
    params.set('from', 'info@3dmenteslab.com');
    params.set('subject', 'prueba');
    params.set('content', 'Hello World');

    return this.http.post(url, params, headers)
                    .toPromise()
                    .then( res => {
                      console.log(res)
                    })
                    .catch(err => {
                      console.log(err)
                    })

  }

    RegisterStudent(desc: string) {
    let student: Student;
  
        let apellido;
      let nombre;
        let email;
        let telefono;
        console.log(desc, 'usuario registrado')
        this.items.push({ message: desc});
    
  }


}