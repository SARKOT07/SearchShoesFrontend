import { Injectable } from "@angular/core";
import {HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { ListShoesDTO } from "../dto/listShoesDTO";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchStore {

  constructor(private http: HttpClient ) { }

  execute(store: string): Observable<ListShoesDTO[]>{
    return this.http.get<ListShoesDTO[]>(`http://localhost:3000/api/shoes/filter/store?store=${store}`).pipe(map((Response : any) =>{ return Response;}))
  }

}
