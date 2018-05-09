import { Component } from '@angular/core';
import { InactivityTimerService } from 'projects/ng-inactivity-timer/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private inactivityTimerService: InactivityTimerService) {}

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
