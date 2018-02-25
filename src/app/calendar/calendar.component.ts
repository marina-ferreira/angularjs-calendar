import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { Calendar } from '../calendar';

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
  selectedDate: Object = this.calendar['currentMonth'];

  slide(direction: string): void {
    let date = `${this.calendar[direction]['year']}-${this.calendar[direction]['month']}`;
    this.calendar = new Calendar(moment(date));
  }
}
