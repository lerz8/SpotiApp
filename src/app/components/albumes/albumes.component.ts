import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.services'

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styles: []
})
export class AlbumesComponent implements OnInit {

  artist:{}={};
  albumes:{}={};
  artist_id:string = "";
  loading:boolean;
  constructor( router:ActivatedRoute, spotify:SpotifyService) {
    router.params.subscribe(parametros=>{
      this.artist_id=parametros.id;
      this.loading=true;
      spotify.getArtist(this.artist_id).subscribe((data:any) =>{
        this.artist=data;
        spotify.getAlbumes(this.artist_id).subscribe((data:any)=>{
        this.albumes=data;
        setTimeout(()=>this.loading=false,1500);
        })
      });
    });
   }

  ngOnInit() {
  }

}
