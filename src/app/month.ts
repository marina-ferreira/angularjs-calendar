import * as moment from 'moment';

export class Month {
  constructor(public moment: moment.Moment) {
    this['day'] = this.moment.clone().date();
    this['month'] = this.moment.clone().format('MM');
    this['monthText'] = this.moment.clone().format('MMMM');
    this['year'] = this.moment.clone().format('YYYY');
    this['date'] = this.moment.clone().format('YYYY-MM-DD');
    this['weekDay'] = this.moment.clone().format('dddd');
    this['daysInMonth'] = this.moment.clone().daysInMonth();
    this['events'] = [];
  }
}
