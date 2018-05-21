import { NgModule } from '@angular/core';

import { StaticRoutingModule } from './static-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [SharedModule, StaticRoutingModule],
  declarations: [AboutComponent, ContactComponent]
})
export class StaticModule {}
