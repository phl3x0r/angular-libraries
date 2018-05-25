import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { StaticModule } from './static';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { SharedModule } from './shared';
import {
  AccountService,
  AlbumService,
  Configuration
} from 'projects/ng-imgur/src/lib';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as albumReducer from './@ngrx/album/album.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AlbumEffects } from './@ngrx/album/album.effects';
import { AlbumFacade } from './@ngrx/album/album.facade';
import { CustomReuseStrategy } from './routing/route.reuse.strategy';
import { RouteReuseStrategy } from '@angular/router';

export const config = new Configuration({
  apiKeys: {
    'Client-ID': '574b1ce7feadab3'
  },
  withCredentials: false
});
@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core & shared
    CoreModule,
    SharedModule,

    // features
    StaticModule,

    // app
    AppRoutingModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: []
      }
    ),
    EffectsModule.forRoot([]),
    StoreModule.forFeature('albumState', albumReducer.reducer),
    EffectsModule.forFeature([AlbumEffects]),
    StoreDevtoolsModule.instrument()
  ],
  declarations: [AppComponent],
  providers: [
    AccountService,
    AlbumService,
    { provide: Configuration, useValue: config },
    AlbumFacade
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
