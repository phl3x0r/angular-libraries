import { Injectable } from '@angular/core';
import {
  ActivityMonitor,
  ACTIVITY_MONITOR
} from 'projects/ng-inactivity-timer/src/public_api';
import { Observable, fromEvent, merge } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { AppModule } from './app.module';

@Injectable()
export class ActivityMonitorService implements ActivityMonitor {
  public getMonitor() {
    return merge(
      fromEvent(document, 'keyup'),
      fromEvent(document, 'keydown'),
      fromEvent(document, 'keypress'),
      fromEvent(document, 'mousemove'),
      fromEvent(document, 'click'),
      fromEvent(document, 'mousescroll'),
      fromEvent(document, 'mouseup'),
      fromEvent(document, 'mousedown')
    ).pipe(mapTo(undefined));
  }
  constructor() {}
}
