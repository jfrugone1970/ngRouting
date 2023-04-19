import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {


  constructor(private _router: Router, private _authservice: AuthService) {}

  ngOnInit(): void {

    let token = sessionStorage.getItem('token');

    if(token){
      this._router.navigate(['home']);

    }

  }

  loginUser(value: any) {

    let {email, password} = value;

    this._authservice.login(email, password).subscribe(
      (response) => {
        if(response.token){
          sessionStorage.setItem('token', response.token);
          this._router.navigate(['home']);

        }
      },
      (error) => console.error(`Ha habido un error al hacer login ${error}`),
      () => console.info('Proceso de login terminado')

    )



  }

  // Pasar informacion entre componentes
  // 1- A traves de @Input y @Output
  //2.- A traves de Inyeccion de Constructores de componentes de hijo @ViewChild, @ContentChild
  // 3.- A atraves de Servicios(promesas, observables) --> NGRX
  // 4.- A traves de parametros entre rutas.




}
