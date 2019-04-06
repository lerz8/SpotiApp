import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'DOMSeguro'
})
export class DOMSeguroPipe implements PipeTransform {

  constructor( private domseguro:DomSanitizer){

  }
  transform(complement: string) {
    const url = "https://open.spotify.com/embed?uri=";
    return this.domseguro.bypassSecurityTrustResourceUrl(url+complement);
  }

}
