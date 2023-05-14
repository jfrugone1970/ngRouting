import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
// DatePicker



// Importamos todo lo necesario para el formulario Reactivo
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  // Creamos el formulario
  loginForm: FormGroup = new FormGroup({});
  @Output() loginAction: EventEmitter<{}> = new EventEmitter<{}>();


  // Inyectamos el FormBuilder

  constructor(private _formbuilder: FormBuilder, private _authservice: AuthService) {

  }

  ngOnInit(): void {

     this.loginForm = this._formbuilder.group({

       email: ['', Validators.compose([Validators.required, Validators.email])],
       password: ['', Validators.required]

     });

  }

  get email() {
    return this.loginForm.get('email');

  }

  get password() {
    return this.loginForm.get('password');

  }

  // Submit del Formulario Login
  submitLogin(){

     if(this.loginForm.valid){
      //console.table(this.loginForm.value);
      //TODO: Peticion a AuthService
      this.loginAction.emit(this.loginForm.value);

      // this.loginForm.reset();

     }

  }

}


