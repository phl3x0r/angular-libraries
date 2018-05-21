import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-galleryview',
  templateUrl: './galleryview.component.html',
  styleUrls: ['./galleryview.component.scss']
})
export class GalleryviewComponent implements OnInit, OnChanges {

  @Input('gallery') gallery: string;

  constructor() { }

  ngOnInit() {
    console.log(this.gallery);
  }

  ngOnChanges() {
    console.log(this.gallery);
  }
}
