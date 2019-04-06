import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: []
})
export class TablaComponent implements OnInit {
  @Input() items:any;
  @Input() image_url=null;
  @Input() show_album_name =true;
  constructor() { }

  ngOnInit() {
  }

}
