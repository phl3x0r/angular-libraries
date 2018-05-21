import { Component, OnInit } from '@angular/core';

import { environment as env } from '../../../environments/environment';
import { ANIMATE_ON_ROUTE_ENTER } from '../../core';

@Component({
  selector: 'td-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  versions = env.versions;

  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
