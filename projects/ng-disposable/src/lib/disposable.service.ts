import { Injectable, Optional, Inject } from '@angular/core';
import { Disposable } from './disposable.interface';
import { DISPOSABLES } from './disposable.token';

@Injectable({
  providedIn: 'root'
})
export class DisposableService {
  constructor(
    @Optional()
    @Inject(DISPOSABLES)
    private disposables: Disposable[]
  ) {}

  public dispose(): number {
    if (!!this.disposables && this.disposables.length > 0) {
      for (const disposable of this.disposables) {
        disposable.dispose();
      }
      return this.disposables.length;
    }
    return 0;
  }
}
