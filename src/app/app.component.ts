import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngRouting';

  token: string | null = null;

  constructor(private _router: Router) {}

  ngOnInit(): void {

    this.token = sessionStorage.getItem('token');


  }

  logout(): void {

    sessionStorage.removeItem('token');
    this._router.navigate(['login']);

  }




}
