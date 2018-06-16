import { Component, OnInit, OnDestroy } from '@angular/core';
import { routerTransition } from '../../core';
import { Location } from '@angular/common';
import { Subscription, Observable, forkJoin, combineLatest } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap, switchMap, shareReplay, filter, take } from 'rxjs/operators';
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
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'td-gallerys',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [routerTransition]
})
export class GalleryComponent implements OnInit, OnDestroy {
  public selectedId$: Observable<number>;

  public albums$: Observable<Album[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumFacade,
    private location: Location
  ) {}
  ngOnInit() {
    this.albums$ = this.albumService.getAlbums();
    this.selectedId$ = combineLatest(this.albums$, this.route.params).pipe(
      map(([albums, params]) => {
        return albums.findIndex(x => x.id === params['id']);
      })
    );
  }

  onTabChange(l: MatTabChangeEvent): void {
    this.albums$.pipe(take(1)).subscribe(albums => {
      this.changeLocation(albums[l.index].id);
    });
  }

  changeLocation(id: string): void {
    this.location.go(this.router.createUrlTree(['/gallery', id]).toString());
  }

  ngOnDestroy(): void {}
}
