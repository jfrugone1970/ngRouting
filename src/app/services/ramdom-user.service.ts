import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IRandomContact } from '../models/ramdomuser';
import { Results } from '../models/ramdomuser';

@Injectable({
  providedIn: 'root'
})
export class RamdomUserService {

  constructor(private _http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if(error.status === 0){
      console.error(`Ha ocurrido un error ${error.error}`);

    }else{
      console.error(`Error en el backend: ${error.status}. El error es ${error.error}`)
    }

    return throwError(() => new Error('Error en la peticion de contacto aleatorio')

    );
  }


  obtenerRandomUser(): Observable<any> {

    return this._http.get('https://randomuser.me/api').pipe(
      catchError(this.handleError)

    );



  }

  obtenerRandomContacts(n: number): Observable<Results[]> {

     const params: HttpParams = new HttpParams().set("results", n)
     return this._http.get<Results[]>('https://randomuser.me/api',{params: params}).pipe(
      catchError(this.handleError)

    );

  }

  obtenerRandomContactsPorGenero(sexo: string): Observable<any> {

    const params: HttpParams = new HttpParams().set("gender", sexo)
    return this._http.get('https://randomuser.me/api',{params: params}).pipe(
     catchError(this.handleError)

   );

  }

  obtenerListaContactos(n: number) {



  }

}
