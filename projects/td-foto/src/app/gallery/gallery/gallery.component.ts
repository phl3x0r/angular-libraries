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
  selector: 'td-examples',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [routerTransition]
})
export class GalleryComponent implements OnInit, OnDestroy {
  examples = [
    { link: 'weddings', label: 'Bryllupper' },
    { link: 'business', label: 'Business' },
    { link: 'portraits', label: 'Portrætter' },
    { link: 'children', label: 'Børn' },
    { link: 'models', label: 'Model' }
  ];

  public id$: Observable<string>;
  private last = -1;
  private current = -1;
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
    // this.albumService.defaultHeaders = new HttpHeaders({
    //   Authorization: 'Client-ID 574b1ce7feadab3'
    // });
    // this.accountService.defaultHeaders = new HttpHeaders({
    //   Authorization: 'Client-ID 574b1ce7feadab3'
    // });

    // this.albums$ = this.accountService
    //   .accountAlbumsByUsernameAndPageGet('NiklasHegnelt', '0')
    //   .pipe(
    //     map(r =>
    //       (r as AccountAlbumsResponse).data.sort((a, b) => a.order - b.order)
    //     ),
    //     switchMap((data: AccountAlbum[]) =>
    //       forkJoin(
    //         ...data.map(d =>
    //           this.albumService
    //             .albumByAlbumHashGet(d.id)
    //             .pipe(map(x => x as AlbumResponse))
    //         )
    //       ).pipe(
    //         map(rs => (rs as AlbumResponse[]).map(ar => ar.data)),
    //         tap((x: Album[]) => {
    //           console.log('first visit?', this.firstVisit);
    //           if (this.firstVisit) {
    //             this.firstVisit = false;
    //             this.router.navigate(['/gallery', x[0].id]);
    //           }
    //         })
    //       )
    //     ),
    //     shareReplay()
    //  );
    this.albums$ = this.albumService.getAlbums();

    this.selectedAlbum$ = this.route.params.pipe(
      map(params => {
        return params['id'];
      }),
      tap(v => {
        this.last = this.current;
        this.current = this.getIndex(v);
        this.direction = this.last > this.current ? 'left' : 'right';
        console.log('foo:', this.last, this.current, this.direction);
      }),
      switchMap(p =>
        this.albums$.pipe(
          tap(x => console.log(x)),
          map(x => x.find((album: Album) => album.id === p)),
          tap(x => console.log('found:', x))
        )
      )
    );
    // .subscribe(x => console.log('result', x));
  }

  private getIndex(link: string): number {
    let i = -1;
    let end = i;
    this.examples.forEach(x => {
      i++;
      if (x.link === link) {
        end = i;
      }
    });
    return end;
  }

  ngOnDestroy(): void {}
}
