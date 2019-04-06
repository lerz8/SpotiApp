import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { SpotifyService } from '../spotify.services'

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styles: []
})
export class AlbumComponent implements OnInit {
  artist:{}={};
  album:{}={};
  album_id:string = "";
  loading:boolean;
  constructor( private router:ActivatedRoute, private spotify:SpotifyService, private send_router:Router) {
    router.params.subscribe(parametros=>{
      this.album_id=parametros.id;
      this.loading=true;
      spotify.getAlbum(this.album_id).subscribe((data:any) =>{
        this.album=data;
        console.log(this.album);
        spotify.getArtist(this.album['artists'][0]['id']).subscribe((artist:any) =>{
          this.artist=artist;
        setTimeout(()=>this.loading=false,1500);
        });

        })
    });
   }

   verAlbumes(id:string){
     this.send_router.navigate(['/albumes',id]);
   }

  ngOnInit() {
  }

}
