import { Component, OnInit } from '@angular/core';
import { ListShoesDTO } from '../../../app/dto/listShoesDTO';
import { SearchBrand } from '../../../app/service/SearchBrand.service';
import { SearchModel } from '../../../app/service/SearchModel.service';
import { SearchReleaseDate } from '../../../app/service/SearchReleaseDate.service';
import { SearchStore } from '../../../app/service/SearchStore.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  search: string = '';
  filter: string = '';
  shoes: ListShoesDTO[] = [];
  date: string = "";
  pagina: number = 0;
  constructor(
    private  searchBrand: SearchBrand,
    private  searchModel: SearchModel,
    private  searchStore: SearchStore,
    private  searchReleaseDate: SearchReleaseDate
    ) { }

  ngOnInit(): void {
  }

  searchReleaseFecha(date: string){

    this.searchReleaseDate.execute(date)
    .subscribe( 
      res => {
        this.shoes = res;
      }, 
    ) 
    
  }

  searchData(search: string, filter: string){

    if(filter == 'Marca'){

        this.searchBrand.execute(search.toLowerCase())
        .subscribe( 
          res => {
            this.shoes = res;
          }, 
        ) 
      
    }else if(filter == 'Modelo'){

      this.searchModel.execute(search.toLowerCase())
      .subscribe( 
        res => {
          this.shoes = res;
        }, 
      ) 

    }else if(filter == 'Tienda'){

      this.searchStore.execute(search.toLowerCase())
      .subscribe( 
        res => {
          this.shoes = res;
        }, 
      ) 

    }
  }
}
