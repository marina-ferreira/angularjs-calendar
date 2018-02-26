import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { Calendar } from '../models/calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  weekDays: Array<string> = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  today = moment();
  calendar: Calendar = new Calendar(this.today);
  selectedDate: Object = {
    day: this.today.clone().format('DD'),
    fullDate: this.today.clone().format('YYYY-MM-DD'),
    weekDay: this.today.clone().format('dddd')
  };

  slide(direction: string): void {
    let date = this.calendar['currentMonth']['instant'][direction](1, 'month');

    this.calendar = new Calendar(moment(date));
  }
}
