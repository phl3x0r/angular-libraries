import { Title } from '@angular/platform-browser';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { environment as env } from '../environments/environment';

import { routerTransition } from './core';
import { Subject } from 'rxjs';

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
  navigation = [
    { link: 'about', label: 'Om' },
    { link: 'contact', label: 'Kontakt' },
    { link: 'gallery', label: 'Galleri' }
  ];
  navigationSideMenu = [...this.navigation];
  isAuthenticated;

  constructor(
    public overlayContainer: OverlayContainer,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.componentCssClass = 'black-theme';
    this.overlayContainer.getContainerElement().classList.add('black-theme');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
