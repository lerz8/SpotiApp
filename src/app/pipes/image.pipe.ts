import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NoImagePipe'
})
export class NoImagePipe implements PipeTransform {

  transform(img_url: any, position:number=0):string {
    return ((img_url[position]) ? img_url[position].url : 'assets/img/noimage.png');
  }

}
