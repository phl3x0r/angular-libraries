import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../core';

@Component({
  selector: 'td-examples',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [routerTransition]
})
export class GalleryComponent implements OnInit {
  examples = [
    { link: 'weddings', label: 'Bryllupper' },
    { link: 'business', label: 'Business' },
    { link: 'portraits', label: 'Portrætter' },
    { link: 'children', label: 'Børn' },
    { link: 'models', label: 'Model' }
  ];

  constructor() {}

  ngOnInit() {}
}
