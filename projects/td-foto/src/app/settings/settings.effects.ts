import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { SETTINGS_KEY, SETTINGS_CHANGE_THEME } from './settings.reducer';
import { Action, LocalStorageService } from '../core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class SettingsEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService
  ) {}

  @Effect({ dispatch: false })
  persistThemeSettings(): Observable<Action> {
    return this.actions$.ofType(SETTINGS_CHANGE_THEME).pipe(
      tap(action =>
        this.localStorageService.setItem(SETTINGS_KEY, {
          theme: action.payload
        })
      )
    );
  }
}
