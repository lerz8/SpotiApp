import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones :any [] = [];
  loading:boolean= true;
    constructor(private spotify:SpotifyService ) {
    this.spotify.getNewReleases().subscribe((data:any) =>{
      setTimeout(()=>{this.nuevasCanciones = data; this.setLoadingFalse()},2000);
    })
}

  setLoadingFalse(){
    setTimeout(()=>this.loading=false,1000);
  }
  ngOnInit() {
  }

}
