import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryComponent } from './gallery/gallery.component';
import { PhotoComponent } from './foto/foto.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent,
    children: [
      {
        path: '',
        redirectTo: 'weddings',
        pathMatch: 'full'
      },
      {
        path: 'weddings',
        component: PhotoComponent,
        data: {
          title: 'Bryllupper'
        }
      },
      {
        path: 'business',
        component: PhotoComponent,
        data: {
          title: 'Business'
        }
      },
      {
        path: 'portraits',
        component: PhotoComponent,
        data: {
          title: 'Portræt'
        }
      },
      {
        path: 'children',
        component: PhotoComponent,
        data: {
          title: 'Børn'
        }
      },
      {
        path: 'models',
        component: PhotoComponent,
        data: {
          title: 'Modeller'
        }
      },
      {
        path: '**',
        redirectTo: 'weddings',
        data: {
          title: 'Bryllupper'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule {}
