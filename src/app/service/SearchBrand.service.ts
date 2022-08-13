import { Injectable } from "@angular/core";
import {HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { ListShoesDTO } from "../dto/listShoesDTO";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchBrand {

  constructor(private http: HttpClient ) { }
  //controlador que consume la busqueda de los zapatos con una marca determinada en la API
  execute(brand: string): Observable<ListShoesDTO[]>{
    return this.http.get<ListShoesDTO[]>(`http://localhost:3000/api/shoes/filter/brand?brand=${brand}`).pipe(map((Response : any) =>{ return Response;}))
  }

}

