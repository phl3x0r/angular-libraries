import { Component, OnInit } from '@angular/core';

import { NgxCarousel } from 'ngx-carousel';
import { routerTransition } from '../../core';

@Component({
  selector: 'td-photos',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.scss'],
  animations: [routerTransition]
})
export class PhotoComponent implements OnInit {
  public carouselOne: NgxCarousel;
  public f = '../../../assets/01.jpeg';

  constructor() {}

  ngOnInit() {
    this.carouselOne = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    };
  }

  myfunc($event: Event): void {
    return;
  }
}
