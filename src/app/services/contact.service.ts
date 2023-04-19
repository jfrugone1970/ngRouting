import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContacto } from '../models/contact.interface';
import { CONTACTOS } from '../mocks/contact.mocks';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  listaFiltrado: IContacto[] = [];
  listaContactos: IContacto[] = CONTACTOS;

  constructor() { }

  obtenerContactos(sexo: string): Promise<IContacto[]> | any  {

    if(sexo == 'hombre' || sexo == 'mujer'){

      this.listaFiltrado = this.listaContactos.filter((contacto) => contacto.sexo == sexo);
      return Promise.resolve(this.listaFiltrado);
    }else if(sexo == 'todos'){
      return Promise.resolve(this.listaContactos);

    }
    else{
      return Promise.reject('Sexo o filtro no valido');
    }
  }
}
