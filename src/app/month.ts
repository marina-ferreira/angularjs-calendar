import * as moment from 'moment';

export class Month {
  constructor(public instant: moment.Moment) {
    this['day'] = instant.clone().date();
    this['month'] = instant.clone().format('MM');
    this['monthText'] = instant.clone().format('MMMM');
    this['year'] = instant.clone().format('YYYY');
    this['date'] = instant.clone().format('YYYY-MM-DD');
    this['weekDay'] = instant.clone().format('dddd');
    this['daysInMonth'] = instant.clone().daysInMonth();
    this['events'] = [];
    this['calendar'] = [];
  }

  public buildMonth = function(firstDay: number, lastDay: number, month: string, year: string) {
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
      };

      this['calendar'].push(date);
    }
  }
}
