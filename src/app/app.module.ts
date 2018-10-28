import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  INACTIVITY_CONFIG,
  InactivityConfig,
  ACTIVITY_MONITOR
} from 'projects/ng-inactivity-timer/src/public_api';
import { ActivityMonitorService } from './activity-monitor.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    {
      provide: INACTIVITY_CONFIG,
      useValue: <InactivityConfig>{
        inactivityTime: 900,
        warningTime: 120
      }
    },
    {
      provide: ACTIVITY_MONITOR,
      useClass: ActivityMonitorService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
