import { Injectable } from "@angular/core";
import {HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { ListShoesDTO } from "../dto/listShoesDTO";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchAll {

  constructor(private http: HttpClient ) { }

  execute(): Observable<ListShoesDTO[]>{
    return this.http.get<ListShoesDTO[]>('http://localhost:3000/api/shoes/filter/all').pipe(map((Response : any) =>{ return Response;}))
  }

}

