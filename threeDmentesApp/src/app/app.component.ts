import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Student } from './core/consts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Student]
})
export class AppComponent implements OnInit {
	public registerForm = FormGroup;
  	constructor(public student: Student,
  				private form: FormBuilder) {}
  	 
  	ngOnInit() {
  		let name = this.student.name;
  		let lastname = this.student.apellidos;
  		let email = this.student.email;
  		let phone = this.student.telefono;

  		let registerForm = this.form.group({
		      name: '',
		      apellidos: '',
		  	})
  	}
  	registerStudent() {
  		console.log()
  	}
}



