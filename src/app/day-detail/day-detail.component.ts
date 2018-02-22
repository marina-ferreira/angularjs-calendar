import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.css']
})
export class DayDetailComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  @Input() date: Object;

  onFormSubmit(form): void {
    let title = form.value['new-event'];

    this.eventService.addEvent({ title, date: this.date['fullDate'] } as event)
                     .subscribe(event => Object.assign(this.date['events'].push(event));

    form.reset();
  }
}
