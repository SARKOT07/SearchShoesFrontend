import { getLocaleCurrencyCode } from '@angular/common';
import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { ListShoesDTO } from '../../../app/dto/listShoesDTO';
import { SearchAll } from '../../../app/service/SearchAll.service';

@Component({ 
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {
  //Componente Search, donde contiene los zapatos buscados, es decir, las cards de los zapatos
  @Input() 
  shoes: ListShoesDTO[] = [];
  @Input() 
  pagina: number = 0;
  constructor(private  searchAll: SearchAll) {}

  ngOnInit(): void {
    this.getAll();
   


  }

  ngOnChanges(): void {
    this.pagina = 1;
  }
  //funcion donde usa por injection de dependencia el servicio que busca todo los zapatos
  getAll(){
    this.searchAll.execute()
    .subscribe( 
      res => {
        this.shoes = res;
        console.log(this.shoes)
      }, 
    ) 
  }

  getDate(date: any){
    return moment.utc(new Date(date)).format("DD-MMM-YYYY") ;
  }

}
