import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { AlbumEffects } from './album.effects';

describe('AlbumService', () => {
  const actions$: Observable<any> = of({});
  let effects: AlbumEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(AlbumEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
