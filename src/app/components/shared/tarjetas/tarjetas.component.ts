import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})


export class TarjetasComponent implements OnInit {
  @Input() items:any[]=[];
  @Input() show_artists:boolean=false;
  @Input() show_album_details:boolean=false;

  constructor( private router:Router) { }

  ngOnInit() {
  }

  verArtista(id:string){
    this.router.navigate(['/artist',id]);
  }

  verAlbum(id:string){
    this.router.navigate(['/album',id]);
  }
}
