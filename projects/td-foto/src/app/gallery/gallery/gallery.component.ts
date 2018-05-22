import { Component, OnInit, OnDestroy } from '@angular/core';
import { routerTransition } from '../../core';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

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

  constructor(private route: ActivatedRoute) {}
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
