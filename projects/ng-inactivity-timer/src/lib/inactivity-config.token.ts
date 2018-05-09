import { InjectionToken } from '@angular/core';
import { InactivityConfig } from './inactivity-config.interface';

export const INACTIVITY_CONFIG = new InjectionToken<InactivityConfig>(
  'Inactivity Configuration'
);
