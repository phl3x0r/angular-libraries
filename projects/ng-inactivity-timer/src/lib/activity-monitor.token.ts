import { InjectionToken } from '@angular/core';
import { ActivityMonitor } from './activity-monitor.interface';

export const ACTIVITY_MONITOR = new InjectionToken<ActivityMonitor>(
  'Activity Monitor'
);
