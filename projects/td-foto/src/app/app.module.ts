import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { StaticModule } from './static';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { SharedModule } from './shared';
import { AlbumService } from '../../../ng-imgur/src/lib';

// export function albumServiceFactory() {
//   return new AlbumService()
// }
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
  providers: [AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule {}
