import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../spotify.services'

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist:{}={};
  top_tracks:{}={};
  artist_id:string = "";
  loading:boolean;
  constructor( router:ActivatedRoute, spotify:SpotifyService, private send_router:Router) {
    router.params.subscribe(parametros=>{
      this.artist_id=parametros.id;
      this.loading=true;
      spotify.getArtist(this.artist_id).subscribe((data:any) =>{
        this.artist=data;
        spotify.getTopTracks(this.artist_id).subscribe((data:any)=>{
        this.top_tracks=data;
        setTimeout(()=>this.loading=false,1500);
        })
      });

    });
   }

   verAlbumes(id:string){
     this.send_router.navigate(['/albumes',id]);
   }
   
  ngOnInit() {
  }

}
