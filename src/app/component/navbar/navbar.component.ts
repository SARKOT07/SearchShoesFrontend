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
  //Componente Navbar, donde contiene la busqueda por filtrado (marca,modelo,fecha de lanzamiento y nombre de tienda)
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

  //funcion donde usa por injection de dependencia el servicio que busca los zapatos por fecha de lanzamiento
  searchReleaseFecha(date: string){

    this.searchReleaseDate.execute(date)
    .subscribe( 
      res => {
        this.shoes = res;
      }, 
    ) 
    
  }

  //funcion donde usa por injection de dependencia utiliza los servicios que buscan los zapatos por marca, modelo y nombre de tienda 
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
