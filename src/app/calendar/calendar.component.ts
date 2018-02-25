import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { Month } from '../month';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.month.buildCalendar();
    this.calendar = this.month['calendar'];
  }

  weekDays: Array<string> = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  today = moment();
  month: Month = new Month(this.today);
  calendar: Array<Object>;
  selectedDate: Object = this.month['currentMonth'];

  slide(direction: string): void {
    let date = `${this.month[direction]['year']}-${this.month[direction]['month']}`;
    this.month = new Month(moment(date));

    this.month.buildCalendar();
    this.calendar = this.month['calendar'];
  }
}
