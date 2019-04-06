import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({ providedIn:'root' })

export class SpotifyService {

  private URL_API= 'https://api.spotify.com/v1/';

  private Authorization_HEADERS =  new HttpHeaders(
    {
      Authorization:
      'Bearer BQA_9xFRxUw9AyW9QdBwqQqV6ZJ8IK_yXi_3GG89n87K0-NfF6LQUmHEZjNkxwqwoPIbVFtLkwDZjW_z5aA'
    });

  constructor( private _http:HttpClient){}

  private RESTRequest(type_request:string, complement_url:string, use_headers:HttpHeaders= new HttpHeaders({}), map_return1:string, map_return2:string,){
    if(type_request=="GET"){
      return this._http.get(`${this.URL_API+complement_url}`,{headers:use_headers})
      .pipe(map( (data:any) => (map_return1 && map_return2) ? data[map_return1][map_return2] : ((map_return1) ? data[map_return1] : data) ));
    }
  }



  //Get New Releases for HOME component
  getNewReleases(){
    return this.RESTRequest('GET','browse/new-releases?country=ES&limit=20',this.Authorization_HEADERS,'albums','items')
  }


  //Search by Artist
  searchByArtist(termino:string){
    return this.RESTRequest('GET',`search?q=${termino}&type=artist&limit=20&offset=0`,this.Authorization_HEADERS,'artists','items')
  }

  //Get an Artist by ID
  getArtist(id:string){
    return this.RESTRequest('GET', `artists/${id}`, this.Authorization_HEADERS,null,null);
  }

  getTopTracks(id:string){
    return this.RESTRequest('GET', `artists/${id}/top-tracks?country=ES`, this.Authorization_HEADERS, 'tracks', null);
  }

  getAlbumes(id:string){
    return this.RESTRequest('GET',`artists/${id}/albums?market=ES&limit=15`,this.Authorization_HEADERS,'items',null);
  }

  getAlbum(id:string){
    return this.RESTRequest('GET',`albums/${id}?market=ES`,this.Authorization_HEADERS,null,null);
  }

}
