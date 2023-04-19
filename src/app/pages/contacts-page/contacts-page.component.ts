import { Component, OnDestroy, OnInit } from '@angular/core';
import { IContacto } from 'src/app/models/contact.interface';
import { CONTACTOS } from 'src/app/mocks/contact.mocks';
import { NavigationExtras, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  public filtroSexo: string = 'todos';
  public listaContactos: IContacto[] = [];
  token: string | null = null;

  constructor(private _router: Router, private _activatedrouter:ActivatedRoute,
       private _contactService: ContactService) {

  }

  ngOnInit(): void {

    // Obtener el token que esta actual
    this.token = sessionStorage.getItem('token');

    // Obtendremos los query params
     this._activatedrouter.queryParams.subscribe((params: any) => {

      console.log('QueryParam:',params.sexo);
      if(params.sexo){
        this.filtroSexo = params.sexo;

      }

      // Obtenemos la lista de contactos
      this.listaContactos = this._contactService.obtenerContactos(this.filtroSexo)
          ?.then((lista: any) => this.listaContactos = lista

          )
          .catch((error: any) => console.error(`Ha habido un error al traer los contactos ${error}`))
          .finally(() => console.info('Peticion de contactos terminado'))



     })
    // this.listaContactos = CONTACTOS;


  }

  regresarAHome(contacto: IContacto){

    let navigationExtras: NavigationExtras = {
      state: {
         data: contacto
      }
    }

    this._router.navigate(['/home'], navigationExtras);

  }






}
