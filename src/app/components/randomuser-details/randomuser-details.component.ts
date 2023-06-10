import { Component, Input, OnInit } from '@angular/core';
import { IRandomContact } from 'src/app/models/ramdomuser';
import { Router } from '@angular/router';



@Component({
  selector: 'app-randomuser-details',
  templateUrl: './randomuser-details.component.html',
  styleUrls: ['./randomuser-details.component.scss']
})
export class RandomuserDetailsComponent implements OnInit {

  @Input() randomContact: IRandomContact | undefined;

  constructor(private _router: Router) {}

  ngOnInit(): void {

  }

  regresarARandom() {

      this._router.navigate(['/dashboard/random']);


  }

}
