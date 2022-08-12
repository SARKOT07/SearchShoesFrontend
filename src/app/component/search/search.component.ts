import { getLocaleCurrencyCode } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListShoesDTO } from 'src/app/dto/listShoesDTO';
import { SearchAll } from '../../../app/service/SearchAll.service';

@Component({ 
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string = '';
  shoes: ListShoesDTO[] = [];

  constructor(private  searchAll: SearchAll) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.searchAll.execute()
    .subscribe( 
      res => {
        this.shoes = res;
        console.log(res);
      }, 
    ) 
  }

}
