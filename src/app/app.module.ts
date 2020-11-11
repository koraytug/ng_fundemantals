import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToaStrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import {appRoutes} from './routes'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService,ToaStrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
