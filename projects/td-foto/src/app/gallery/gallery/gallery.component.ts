import { Component, OnInit, OnDestroy } from '@angular/core';
import { routerTransition } from '../../core';
import { Subscription, Observable, forkJoin } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap, switchMap, shareReplay, filter } from 'rxjs/operators';
import {
  AlbumService,
  AlbumResponse,
  Album,
  Image,
  AccountService,
  AccountAlbumsResponse,
  AccountAlbum,
  Configuration
} from 'projects/ng-imgur/src/lib';
import { HttpHeaders } from '@angular/common/http';
import { AlbumFacade } from '../../@ngrx/album/album.facade';

@Component({
  selector: 'td-gallerys',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [routerTransition]
})
export class GalleryComponent implements OnInit, OnDestroy {
  public id$: Observable<string>;
  private last = -1;
  public current = 0;
  public direction = 'right';
  private firstVisit = true;

  public albums$: Observable<Album[]>;
  public selectedAlbum$: Observable<Album>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumFacade
  ) {}
  ngOnInit() {
    this.albums$ = this.albumService.getAlbums();

    this.selectedAlbum$ = this.route.params.pipe(
      map(params => {
        return params['id'];
      }),
      switchMap(p =>
        this.albums$.pipe(
          tap(x => {
            this.last = this.current;
            this.current = this.getIndex(x, p);
            this.direction = this.last > this.current ? 'left' : 'right';
          }),
          map(x => x.find((album: Album) => album.id === p))
        )
      )
    );
  }

  private getIndex(albums: Album[], id: string): number {
    let i = -1;
    let end = i;
    albums.forEach(x => {
      i++;
      if (x.id === id) {
        end = i;
      }
    });
    return end;
  }

  ngOnDestroy(): void {}
}
