import { PhotoComponent } from './foto/foto.component';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import 'hammerjs';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { ParentComponent } from './theming/parent/parent.component';
import { ChildComponent } from './theming/child/child.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [SharedModule, GalleryRoutingModule],
  declarations: [
    ParentComponent,
    ChildComponent,
    GalleryComponent,
    PhotoComponent
  ]
})
export class GalleryModule {
  constructor() {}
}
