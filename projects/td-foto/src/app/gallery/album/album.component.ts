import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import {
  routerTransition,
  ANIMATE_ON_ROUTE_ENTER,
  slideTransition
} from '../../core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Album, Image } from 'projects/ng-imgur/src/lib';

@Component({
  selector: 'td-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  animations: [slideTransition]
})
export class AlbumComponent implements OnInit, OnDestroy {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  public f = '../../../assets/01.jpeg';
  private GALLERY_IMAGE_SIZE = 200;

  @Input() album: Album;
  @Input() direction = 'right';
  @Input() selectedIndex = 0;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {}

  ngOnDestroy(): void {}

  getWidth(image: Image): number {
    const width =
      image.width < image.height
        ? this.GALLERY_IMAGE_SIZE / (image.height / image.width)
        : this.GALLERY_IMAGE_SIZE;
    return width;
  }

  getHeight(image: Image): number {
    const height =
      image.height < image.width
        ? this.GALLERY_IMAGE_SIZE / (image.width / image.height)
        : this.GALLERY_IMAGE_SIZE;
    return height;
  }
}
