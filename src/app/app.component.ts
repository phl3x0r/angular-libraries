import { Component, OnInit } from '@angular/core';
import { InactivityTimerService } from 'projects/ng-inactivity-timer/src/public_api';
import { of, from } from 'rxjs';
import { switchRefresh, refresher, mergeRefresh } from 'rx-refresh';
import { delay, switchMapTo, take, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const slowUrl =
      // tslint:disable-next-line:max-line-length
      'http://slowwly.robertomurray.co.uk/delay/10000/url/';

    const url = 'https://talaikis.com/api/quotes/random/';

    const request = this.http.get(url);

    // switches http request, cancelling previous request if not complete
    request
      .pipe(
        delay(2000),
        switchRefresh(1000)
      )
      .subscribe(res => console.log('switched: ', res));

    // merges http requests
    request
      .pipe(mergeRefresh(1000))
      .subscribe(res => console.log('merged: ', res));

    // useful if you need full control of the source and the number of emits
    refresher(1000)
      .pipe(map(x => 1 / x))
      .subscribe(res => console.log('inverse: ', res));
  }
  constructor(
    private inactivityTimerService: InactivityTimerService,
    private http: HttpClient
  ) {}

  public startMonitoring(): void {
    this.inactivityTimerService.startMonitor(); // if called with true, will also trigger actvivity
  }

  public stopMonitoring(): void {
    this.inactivityTimerService.stopMonitor();
  }

  public getTimeout(): void {
    this.inactivityTimerService.getTimeOut().subscribe(activity => {
      // do something
    });
  }

  public triggerActivity(): void {
    this.inactivityTimerService.activate();
  }
}
