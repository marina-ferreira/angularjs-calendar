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

  public isSelected(fullDate: string): boolean {
    if (!this.selectedDate) return;

    return this.selectedDate['fullDate'] === fullDate;
  }

  public setSelected(day: Object): void {
    this.selectedDate = day;
  }

  private buildMonth(firstDay: number, lastDay: number, month: string, year: string): void {
    for (let i = firstDay; i <= lastDay; i++) {
      let day = i < 10 ? '0' + i : i.toString();
      let fullDate = `${year}-${month}-${day}`;
      let weekDay = moment(fullDate).format('dddd');

      let date = {
        day: day,
        month: month,
        year: year,
        fullDate: fullDate,
        weekDay: weekDay
      }

      this.calendar.push(date);
    }
  }

  private buildCalendar(): void {
    let [m1, m2, m3] = [this.lastMonth, this.currentMonth, this.nextMonth];

    this.buildMonth(m1['day'], m1['daysInMonth'], m1['month'], m1['year'])
    this.buildMonth(1, m2['daysInMonth'], m2['month'], m2['year'])
    this.buildMonth(1, m3['day'], m3['month'], m3['year'])
  }
}
