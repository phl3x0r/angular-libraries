import { Title } from '@angular/platform-browser';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { environment as env } from '../environments/environment';

import { routerTransition } from './core';
import { Subject, BehaviorSubject, Observable, of } from 'rxjs';
import { AccountService } from 'projects/ng-imgur/src/public_api';
import { AlbumFacade } from './@ngrx/album/album.facade';
import {
  take,
  filter,
  map,
  merge,
  mergeMapTo,
  startWith,
  switchMap
} from 'rxjs/operators';

export interface NavigationMenuItem {
  label: string;
  link?: string;
  children?: NavigationMenuItem[];
}

export interface NavigationMenu {
  items: NavigationMenuItem[];
}

@Component({
  selector: 'td-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  @HostBinding('class') componentCssClass;

  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = require('../assets/logo.png');
  navigation = <NavigationMenu>{
    items: [
      { link: 'about', label: 'Om' },
      { link: 'contact', label: 'Kontakt' }
    ]
  };
  navigationSideMenu$ = new Observable<NavigationMenu>();
  isAuthenticated;

  constructor(
    public overlayContainer: OverlayContainer,
    private router: Router,
    private titleService: Title,
    private albumService: AlbumFacade
  ) {}

  ngOnInit(): void {
    this.componentCssClass = 'black-theme';
    this.overlayContainer.getContainerElement().classList.add('black-theme');
    this.navigationSideMenu$ = this.albumService.getAlbums().pipe(
      switchMap(albums => {
        const items = [...this.navigation.items];
        const mapped = albums.map(
          album => <NavigationMenuItem>{ link: album.id, label: album.title }
        );
        items.push({
          link: 'gallery',
          label: 'Galleri',
          children: [...mapped]
        });
        return of(<NavigationMenu>{ items: items });
      }),
      startWith(this.navigation)
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
