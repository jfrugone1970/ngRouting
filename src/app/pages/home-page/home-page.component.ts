import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';
import { CONTACTOS } from 'src/app/mocks/contact.mocks';
import { IRandomContact } from 'src/app/models/ramdomuser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public contactoSeleccionado: IRandomContact | undefined;
  public contactorandomseleccionado: IRandomContact | undefined;
  token: string | null = null;
  public opcion: number = 0;
  public miFecha: Date = new Date();
  constructor(private _router: Router) {}

  ngOnInit(): void {

    // Comprobar si esta el RandomContact seleccionado

    // Comprobar si existe el token
    this.token = sessionStorage.getItem('token');

    // Verificar token
    this.verifica_token();


    // Leemos del Estado de Historia de Navegacion
    if(history.state.data){
      console.log(history.state.data);
      this.contactorandomseleccionado = history.state.data;



    }


  }

  verifica_token() {

    // Regresa a login si no hay token
    if(!this.token){
      this._router.navigate(['login']);

    }


  }

  navegarAContacts(): void{

    let navigationExtras: NavigationExtras = {
      queryParams: {
        sexo: 'todos'
      }
    }

    this._router.navigate(['/dashboard/contacts'], navigationExtras);

  }



}
