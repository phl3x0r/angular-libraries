import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { AlbumEntity } from './album.model';
import { HttpErrorResponse } from '@angular/common/http';

export enum AlbumActionTypes {
  LoadAlbums = '[Album] Load Albums',
  LoadAlbumsFail = '[Album] Load Albums Failed',
  LoadAlbumsSuccess = '[Album] Load Albums Success',
  AddAlbum = '[Album] Add Album',
  UpsertAlbum = '[Album] Upsert Album',
  AddAlbums = '[Album] Add Albums',
  UpsertAlbums = '[Album] Upsert Albums',
  UpdateAlbum = '[Album] Update Album',
  UpdateAlbums = '[Album] Update Albums',
  DeleteAlbum = '[Album] Delete Album',
  DeleteAlbums = '[Album] Delete Albums',
  ClearAlbums = '[Album] Clear Albums'
}

export class LoadAlbums implements Action {
  readonly type = AlbumActionTypes.LoadAlbums;

  constructor() {}
}

export class LoadAlbumsFail implements Action {
  readonly type = AlbumActionTypes.LoadAlbumsFail;

  constructor(public payload: { error: HttpErrorResponse }) {}
}

export class LoadAlbumsSuccess implements Action {
  readonly type = AlbumActionTypes.LoadAlbumsSuccess;

  constructor(public payload: { albums: AlbumEntity[] }) {}
}

export class AddAlbum implements Action {
  readonly type = AlbumActionTypes.AddAlbum;

  constructor(public payload: { album: AlbumEntity }) {}
}

export class UpsertAlbum implements Action {
  readonly type = AlbumActionTypes.UpsertAlbum;

  constructor(public payload: { album: AlbumEntity }) {}
}

export class AddAlbums implements Action {
  readonly type = AlbumActionTypes.AddAlbums;

  constructor(public payload: { albums: AlbumEntity[] }) {}
}

export class UpsertAlbums implements Action {
  readonly type = AlbumActionTypes.UpsertAlbums;

  constructor(public payload: { albums: AlbumEntity[] }) {}
}

export class UpdateAlbum implements Action {
  readonly type = AlbumActionTypes.UpdateAlbum;

  constructor(public payload: { album: Update<AlbumEntity> }) {}
}

export class UpdateAlbums implements Action {
  readonly type = AlbumActionTypes.UpdateAlbums;

  constructor(public payload: { albums: Update<AlbumEntity>[] }) {}
}

export class DeleteAlbum implements Action {
  readonly type = AlbumActionTypes.DeleteAlbum;

  constructor(public payload: { id: string }) {}
}

export class DeleteAlbums implements Action {
  readonly type = AlbumActionTypes.DeleteAlbums;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearAlbums implements Action {
  readonly type = AlbumActionTypes.ClearAlbums;
}

export type AlbumActions =
  | LoadAlbums
  | LoadAlbumsFail
  | LoadAlbumsSuccess
  | AddAlbum
  | UpsertAlbum
  | AddAlbums
  | UpsertAlbums
  | UpdateAlbum
  | UpdateAlbums
  | DeleteAlbum
  | DeleteAlbums
  | ClearAlbums;
