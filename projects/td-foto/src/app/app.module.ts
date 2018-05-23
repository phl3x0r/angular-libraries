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
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [
    AccountService,
    AlbumService,
    { provide: Configuration, useValue: config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
