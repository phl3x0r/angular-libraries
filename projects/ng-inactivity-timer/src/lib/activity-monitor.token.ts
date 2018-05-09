import { InjectionToken } from '@angular/core';
import { ActivityMonitor } from './activity-monitor.interface';

export const ACTIVITY_MONITORS = new InjectionToken<ActivityMonitor[]>(
  'Activity Monitors'
);
