import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RamdomUserService } from '../../services/ramdom-user.service';
import { IRandomContact, Results } from 'src/app/models/ramdomuser';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  public filtroSexo: string = 'todos';
  public listaRandomContact: IRandomContact[] = [];
  public numrandom: number = 10;
  token: string | null = null;

  constructor(private _router: Router, private _activatedrouter:ActivatedRoute,
       private _randomService: RamdomUserService) {

  }

  ngOnInit(): void {

    // Obtener el token que esta actual
    this.token = sessionStorage.getItem('token');

    // Obtendremos los query params
    this._activatedrouter.queryParams.subscribe((params: any) => {
      console.log('Query Params',params.sexo)

      if(params.sexo){
        this.filtroSexo = params.sexo

        if(params.sexo === 'female' || params.sexo === 'male'){

          this._randomService.obtenerRandomContactsPorGenero(this.numrandom, params.sexo).subscribe(
            {
              next: (response: Results) => {
                console.log(response);

                response.results.forEach((randomContact: IRandomContact, index: number) => {
                  this.listaRandomContact.push(randomContact);

                })

              },
              error: (error) => console.log(`${error}`),
              complete: () => console.info('Peticion de random contacts terminado')
            }
          )


        }else {

          // Implementacion para Obtener la lista random user service

          this._randomService.obtenerRandomContacts(this.numrandom, params.sexo).subscribe(
            {
              next: (response: Results) => {
                console.log(response);

                response.results.forEach((randomContact: IRandomContact, index: number) => {
                  this.listaRandomContact.push(randomContact);

                })

              },
              error: (error) => console.log(`${error}`),
              complete: () => console.info('Peticion de random contacts terminado')
            }
          )


        }
      }


    });


  }

  regresarAHome(contacto: IRandomContact) {

    let navigationExtras: NavigationExtras = {
      state: {
        data: contacto
      },

    }

    this._router.navigate(['/home'], navigationExtras);

  }


}
