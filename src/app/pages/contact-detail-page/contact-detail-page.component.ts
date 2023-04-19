import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CONTACTOS } from 'src/app/mocks/contact.mocks';
import { IContacto } from 'src/app/models/contact.interface';
import { NombreCompletoPipe } from 'src/app/pipes/nombre-completo.pipe';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent implements OnInit {

  public contacto_detalle: IContacto = {
    id: 0,
    nombre: '',
    apellidos: '',
    email: '',
    sexo: 'mujer'
  }

  public id: any | undefined;
  public filtroPrevio: string = 'todos';

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {

    this._activatedRoute.params.subscribe(
      (params: any) => {
        if(params.id){
           this.id = params.id;

        }

      }
    )

    // Vamos a leer el Estado del contacto
    if(history.state.data){
      this.contacto_detalle = history.state.data;


    }

    if(history.state.filtro){
      this.filtroPrevio = history.state.filtro;

    }


  }

  regresarAContacts(): void{

    this._router.navigate(['contacts']);


  }

}
