import { Component, OnInit } from '@angular/core';
import { RamdomUserService } from 'src/app/services/ramdom-user.service';
import { Results } from 'src/app/models/ramdomuser';
import { IRandomContact } from 'src/app/models/ramdomuser';

@Component({
  selector: 'app-ramdon-contact-page',
  templateUrl: './ramdon-contact-page.component.html',
  styleUrls: ['./ramdon-contact-page.component.scss']
})
export class RamdonContactPageComponent implements OnInit {

  contact: IRandomContact | undefined;

  constructor(private _ramdomuser: RamdomUserService) {}

  ngOnInit(): void {

    this._ramdomuser.obtenerRandomUser().subscribe((response: Results) => {


      this.contact = response.results[0];


 });


}

obtenernuevoContacto() {

  /*
  this._ramdomuser.obtenerRandomUser().subscribe((response: Results) => {

    this.contact = response.results[0];


},
  (error: any) => console.error(`${error}`)

);

*/

this._ramdomuser.obtenerRandomUser().subscribe({
  next: (response: Results) => {

    this.contact = response.results[0];


},
error: (error) => console.error(`${error}`),
complete: () => console.info('Peticion de Random contacto terminada')
})

}

obtenerListaContactos(n: number) {

  this._ramdomuser.obtenerListaContactos(n).subscribe((response: Results) => {

    this.contact = response.results[0];

    console.table(this.contact);


},
  (error: any) => console.error(`${error}`),

);



}



}


