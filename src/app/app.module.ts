import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './day/day.component';
import { EventService } from './event.service';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { DayDetailComponent } from './day-detail/day-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayComponent,
    DayDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
