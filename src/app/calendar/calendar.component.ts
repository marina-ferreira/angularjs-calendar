import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  currentSelection: string;
  weekDays: Array<string> = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  calendar: Array<Object> = [];
  today = moment();

  currentMonth: Object = {
    day: this.today.clone().date(),
    month: this.today.clone().format('MM'),
    year: this.today.clone().format('YYYY'),
    daysInMonth: this.today.clone().daysInMonth()
  }

  lastMonth: Object = {
    day: this.today.clone().startOf('month').startOf('week').date(),
    month: this.today.clone().startOf('month').startOf('week').format('MM'),
    year: this.today.clone().startOf('month').startOf('week').format('YYYY'),
    days: this.today.clone().startOf('month').startOf('week').daysInMonth()
  }

  nextMonth: Object = {
    day: this.today.clone().endOf('month').endOf('week').date(),
    month: this.today.clone().endOf('month').endOf('week').format('MM'),
    year: this.today.clone().endOf('month').endOf('week').format('YYYY')
  }

  buildCalendar(): void {
    let [m1, m2, m3] = [this.lastMonth, this.currentMonth, this.nextMonth];

    this.buildMonth(m1['day'], m1['days'], m1['month'], m1['year'])
    this.buildMonth(1, m2['daysInMonth'], m2['month'], m2['year'])
    this.buildMonth(1, m3['day'], m3['month'], m3['year'])
  }

  buildMonth(start: number, end: number, month: string, year: string): void {
    for (let i = start; i <= end; i++) {
      let day = i < 10 ? '0' + i : i.toString(),
          date = `${year}-${month}-${day}`

      this.calendar.push({ day: day, month: month, year: year, date: date });
    }
  }

  constructor() { }

  ngOnInit() {
    this.buildCalendar();
  }

  isSelected(day: string): boolean {
    return this.currentSelection === day;
  }

  setSelected(day: string): void {
    this.currentSelection = day;
  }
}
