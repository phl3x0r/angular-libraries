import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { AlbumEntity } from './album.model';
import { AlbumActions, AlbumActionTypes } from './album.actions';
import { createFeatureSelector } from '@ngrx/store';

export interface State extends EntityState<AlbumEntity> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<AlbumEntity> = createEntityAdapter<
  AlbumEntity
>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  loading: false,
  loaded: false
});

export function reducer(state = initialState, action: AlbumActions): State {
  switch (action.type) {
    case AlbumActionTypes.AddAlbum: {
      return adapter.addOne(action.payload.album, state);
    }

    case AlbumActionTypes.UpsertAlbum: {
      return adapter.upsertOne(action.payload.album, state);
    }

    case AlbumActionTypes.AddAlbums: {
      return adapter.addMany(action.payload.albums, state);
    }

    case AlbumActionTypes.UpsertAlbums: {
      return adapter.upsertMany(action.payload.albums, state);
    }

    case AlbumActionTypes.UpdateAlbum: {
      return adapter.updateOne(action.payload.album, state);
    }

    case AlbumActionTypes.UpdateAlbums: {
      return adapter.updateMany(action.payload.albums, state);
    }

    case AlbumActionTypes.DeleteAlbum: {
      return adapter.removeOne(action.payload.id, state);
    }

    case AlbumActionTypes.DeleteAlbums: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case AlbumActionTypes.LoadAlbums: {
      return { ...state, loading: true, loaded: false };
    }

    case AlbumActionTypes.LoadAlbumsSuccess: {
      return adapter.addAll(action.payload.albums, {
        ...state,
        loaded: true,
        loading: false
      });
    }

    case AlbumActionTypes.ClearAlbums: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const selectFavoriteAccountState = createFeatureSelector<State>(
  'albumState'
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors(selectFavoriteAccountState);
