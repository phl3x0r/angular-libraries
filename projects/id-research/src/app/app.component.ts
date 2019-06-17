import { Component } from '@angular/core';
import { routerTransition } from './animations/router.transition';

@Component({
  selector: 'idr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {
  title = 'id-research';
}
