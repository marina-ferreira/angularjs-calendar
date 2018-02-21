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
  today = moment();

  calendar: Object = {
    day: this.today.clone().date(),
    month: this.today.clone().month(),
    year: this.today.clone().year(),
    date: this.today.clone().format('YYYY-MM'),
    daysInMonth: Array(this.today.clone().daysInMonth())
  }


  constructor() { }

  ngOnInit() {

  }

  isSelected(day: string): boolean {
    return this.currentSelection === day;
  }

  setSelected(day: string): void {
    this.currentSelection = day;
  }
}
