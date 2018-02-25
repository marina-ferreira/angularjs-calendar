import * as moment from 'moment';

import { Month } from './month';

export class Calendar {
  constructor(instant: moment.Moment) {
    let lastMonth = instant.clone().startOf('month').startOf('week');
    let nextMonth = instant.clone().endOf('month').endOf('week');

    this['currentMonth'] = new Month(instant, 'current');
    this['lastMonth'] = new Month(lastMonth, 'last');
    this['nextMonth'] = new Month(nextMonth, 'next');

    this.buildCalendar();
  }

  private buildCalendar = function() {
    if (this['lastMonth']['month'] === this['currentMonth']['month']) {
      this['lastMonth']['days'] = [];
    }

    if (this['nextMonth']['month'] === this['currentMonth']['month']) {
      this['nextMonth']['days'] = [];
    }

    this['fullMonth'] = this['lastMonth']['days']
                          .concat(this['currentMonth']['days']
                          .concat(this['nextMonth']['days']));
  }
}
