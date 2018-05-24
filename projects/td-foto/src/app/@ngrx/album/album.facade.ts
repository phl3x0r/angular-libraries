import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as albumReducer from './album.reducer';
import * as actions from './album.actions';
import { Observable } from 'rxjs';
import { Album } from 'projects/ng-imgur/src/lib';
import { map, switchMap, switchMapTo, tap } from 'rxjs/operators';

@Injectable()
export class AlbumFacade {
  constructor(private store: Store<albumReducer.State>) {}

  public loadAlbums(): void {
    this.store.dispatch(new actions.LoadAlbums());
  }

  public getAlbums(): Observable<Album[]> {
    return this.getAlbumState().pipe(
      tap(state => {
        if (!state.loaded && !state.loading) {
          this.loadAlbums();
        }
      }),
      switchMapTo(
        this.store
          .select(albumReducer.selectAll)
          .pipe(map(x => x.map(y => y.album)))
      )
    );
  }

  public getAlbumState(): Observable<albumReducer.State> {
    return this.store.select(albumReducer.selectFavoriteAccountState);
  }
}
