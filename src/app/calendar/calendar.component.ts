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
    this.buildCalendar();
  }

  weekDays: Array<string> = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  calendar: Array<Object> = [];

  today = moment();
  currentMonth: Month = new Month(this.today);
  lastMonth: Month = new Month(this.today.clone().startOf('month').startOf('week'));
  nextMonth: Month = new Month(this.today.clone().endOf('month').endOf('week'));

  selectedDate: Object = this.currentMonth;

  private buildCalendar(): void {
    let [m1, m2, m3] = [this.lastMonth, this.currentMonth, this.nextMonth];

    this.lastMonth.buildMonth(m1['day'], m1['daysInMonth'], m1['month'], m1['year']);
    this.currentMonth.buildMonth(1, m2['daysInMonth'], m2['month'], m2['year']);
    this.nextMonth.buildMonth(1, m3['day'], m3['month'], m3['year']);

    this.calendar = m1['calendar'].concat(m2['calendar'])
                                  .concat(m3['calendar']);
  }
}
