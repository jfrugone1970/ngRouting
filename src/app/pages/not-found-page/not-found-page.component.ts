import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {

  constructor(private _router: Router) {}

  ngOnInit(): void{

  }

  regresarAInicio(): void {

    this._router.navigate(['/dashboard']);


  }



}
