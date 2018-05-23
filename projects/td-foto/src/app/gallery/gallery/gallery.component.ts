import { Component, OnInit, OnDestroy } from '@angular/core';
import { routerTransition } from '../../core';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { AlbumService } from 'projects/ng-imgur/src/lib';
import { HttpHeaders } from '@angular/common/http';

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

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}
  ngOnInit() {
    this.id$ = this.route.params.pipe(
      map(params => {
        return params['id'];
      }),
      tap(v => {
        this.last = this.current;
        this.current = this.getIndex(v);
        this.direction = this.last > this.current ? 'left' : 'right';
        console.log('foo:', this.last, this.current, this.direction);
      })
    );

    this.albumService.defaultHeaders = new HttpHeaders({
      Authorization: 'Client-ID: 574b1ce7feadab3'
    });
    this.albumService
      .albumByAlbumHashGet('AfmLQZq')
      .subscribe(x => console.log('result', x));
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
