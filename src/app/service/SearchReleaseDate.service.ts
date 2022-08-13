import { Injectable } from "@angular/core";
import {HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { ListShoesDTO } from "../dto/listShoesDTO";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchReleaseDate {

  constructor(private http: HttpClient ) { }
  //controlador que consume la busqueda de los zapatos con una fecha de lanzamiento determinado en la API
  execute(date: string): Observable<ListShoesDTO[]>{
    return this.http.get<ListShoesDTO[]>(`http://localhost:3000/api/shoes/filter/releaseDate?date=${date}`).pipe(map((Response : any) =>{ return Response;}))
  }

}
