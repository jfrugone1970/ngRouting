import { Component, OnInit, Input } from '@angular/core';
import { IRandomContact } from 'src/app/models/ramdomuser';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss']
})
export class RandomUserComponent implements OnInit {

  @Input() randomContact: IRandomContact | undefined;

  constructor(private _router: Router) {}

  ngOnInit(): void {




  }

  regresarAHome() {

    this._router.navigate(['home']);

  }

  elegirContacto(contacto: IRandomContact) {

    let navigationExtras: NavigationExtras = {
      state: {
        data: contacto
      }
    }

    this._router.navigate(['/home'], navigationExtras);




  }



}
