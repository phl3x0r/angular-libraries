import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of as observableOf, forkJoin } from 'rxjs';
import { Action } from '@ngrx/store';
import * as actions from './album.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import {
  AccountService,
  AlbumService,
  AccountAlbumsResponse,
  AccountAlbum,
  AlbumResponse,
  Album
} from 'projects/ng-imgur/src/lib';
import { AlbumEntity } from './album.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AlbumEffects {
  constructor(
    private actions$: Actions,
    private accountService: AccountService,
    private albumService: AlbumService
  ) {}

  @Effect()
  loadAlbums$: Observable<Action> = this.actions$.pipe(
    ofType(actions.AlbumActionTypes.LoadAlbums),
    switchMap(() => {
      this.albumService.defaultHeaders = new HttpHeaders({
        Authorization: 'Client-ID 574b1ce7feadab3'
      });
      this.accountService.defaultHeaders = new HttpHeaders({
        Authorization: 'Client-ID 574b1ce7feadab3'
      });
      return this.accountService
        .accountAlbumsByUsernameAndPageGet('tdfoto', '0')
        .pipe(
          map(r =>
            (r as AccountAlbumsResponse).data.sort((a, b) => a.order - b.order)
          ),
          switchMap((data: AccountAlbum[]) =>
            forkJoin(
              ...data.map(d =>
                this.albumService
                  .albumByAlbumHashGet(d.id)
                  .pipe(map(x => x as AlbumResponse))
              )
            ).pipe(
              map(
                rs =>
                  new actions.LoadAlbumsSuccess({
                    albums: (rs as AlbumResponse[]).map(
                      ar => <AlbumEntity>{ id: ar.data.id, album: ar.data }
                    )
                  })
              ),
              catchError(err => observableOf(new actions.LoadAlbumsFail(err)))
            )
          )
        );
    })
  );
}
