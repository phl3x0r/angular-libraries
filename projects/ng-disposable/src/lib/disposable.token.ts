import { InjectionToken } from '@angular/core';
import { Disposable } from './disposable.interface';

export const DISPOSABLES = new InjectionToken<Disposable[]>('DISPOSABLE');
