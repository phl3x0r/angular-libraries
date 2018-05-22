import { AlbumComponent } from './album/album.component';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import 'hammerjs';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [SharedModule, GalleryRoutingModule],
  declarations: [GalleryComponent, AlbumComponent]
})
export class GalleryModule {
  constructor() {}
}
