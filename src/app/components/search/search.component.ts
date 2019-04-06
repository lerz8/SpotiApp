import { Component, OnInit } from '@angular/core';
import {SpotifyService } from '../spotify.services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor( private spotify:SpotifyService) { }

  ngOnInit() {
  }
  busqueda:string;
  loading:boolean=false;
  resultadoBusqueda:any[]=[];
  searchArtist(termino:string){
    if(termino.length>0){
      this.setLoadingTrue();
      this.busqueda = termino;
      this.spotify.searchByArtist(termino).subscribe(data =>{
        setTimeout(()=>{this.resultadoBusqueda = data; this.setLoadingFalse()},2000);
      });
    }

  }

  setLoadingFalse(){
    setTimeout(()=>this.loading=false,1000);
  }

  setLoadingTrue(){
    this.loading=true;
  }

}
