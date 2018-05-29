import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import {
  routerTransition,
  ANIMATE_ON_ROUTE_ENTER,
  slideTransition
} from '../../core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Album, Image } from 'projects/ng-imgur/src/lib';
import { MatDialog } from '@angular/material';
import { ImageDialogComponent } from './image.dialog';

@Component({
  selector: 'td-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  animations: [slideTransition]
})
export class AlbumComponent implements OnInit, OnDestroy {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  private GALLERY_IMAGE_SIZE = 200;

  @Input() album: Album;

  constructor(public dialog: MatDialog) {}
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

  openDialog(imageUrl: string): void {
    console.log(window.innerWidth + 'px', 'x', window.innerHeight + 'px');
    const dialogRef = this.dialog.open(ImageDialogComponent, {
      maxHeight: window.innerHeight + 'px',
      maxWidth: window.innerWidth + 'px',
      panelClass: 'dialog-panel',
      data: {
        img: imageUrl,
        maxHeight: window.innerHeight - 58 + 'px',
        maxWidth: window.innerWidth - 58 + 'px'
      }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }
}
