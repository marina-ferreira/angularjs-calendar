import * as moment from 'moment';

import { Month } from './month';

export class Calendar {
  constructor(month: moment.Moment) {
    let lastMonth = month.clone().startOf('month').startOf('week');
    let nextMonth = month.clone().endOf('month').endOf('week');

    this['currentMonth'] = new Month(month, 'current');
    this['lastMonth'] = new Month(lastMonth, 'last');
    this['nextMonth'] = new Month(nextMonth, 'next');

    this['fullMonth'] = this['lastMonth']['days']
                          .concat(this['currentMonth']['days']
                          .concat(this['nextMonth']['days']));
  }
}
