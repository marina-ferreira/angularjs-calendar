import * as moment from 'moment';

export class Month {
  constructor(public instant: moment.Moment) {
    let lastMonth = instant.clone().startOf('month').startOf('week');
    let nextMonth = instant.clone().endOf('month').endOf('week');

    this['calendar'] = [];

    this['currentMonth'] = {
      day: instant.clone().date(),
      month: instant.clone().format('MM'),
      monthText: instant.clone().format('MMMM'),
      year: instant.clone().format('YYYY'),
      weekDay: instant.clone().format('dddd'),
      firstDay: 1,
      lastDay: instant.clone().daysInMonth(),
      events: [],
      days: []
    };

    this['lastMonth'] = {
      day: lastMonth.clone().date(),
      month: lastMonth.clone().format('MM'),
      year: lastMonth.clone().format('YYYY'),
      weekDay: lastMonth.clone().format('dddd'),
      firstDay: lastMonth.clone().date(),
      lastDay: lastMonth.clone().daysInMonth(),
      events: [],
      days: []
    };

    this['nextMonth'] = {
      day: nextMonth.clone().date(),
      month: nextMonth.clone().format('MM'),
      year: nextMonth.clone().format('YYYY'),
      weekDay: nextMonth.clone().format('dddd'),
      firstDay: 1,
      lastDay: nextMonth.clone().date(),
      events: [],
      days: []
    };
  }

  public buildMonth = function(month: Object) {
    for (let i = month['firstDay']; i <= month['lastDay']; i++) {
      let day = i < 10 ? '0' + i : i.toString();
      let fullDate = `${month['year']}-${month['month']}-${day}`;
      let weekDay = moment(fullDate).format('dddd');

      let date = {
        day: day,
        month: month['month'],
        year: month['year'],
        fullDate: fullDate,
        weekDay: weekDay
      };

      month['days'].push(date);
    }

    return month['days'];
  }

  public buildCalendar = function() {
    let months = [this['lastMonth'], this['currentMonth'], this['nextMonth']];

    months.forEach(month => {
      this['calendar'] = this['calendar'].concat(this.buildMonth(month));
    });
  }
}
