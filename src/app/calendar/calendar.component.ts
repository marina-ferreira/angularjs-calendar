import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  weekDays: Array<string> = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  today = moment();

  calendar: Object = {
    day: this.today.clone().date(),
    month: this.today.clone().month(),
    daysInMonth: Array(this.today.clone().daysInMonth())
  }

  constructor() { }

  ngOnInit() {

  }
}
