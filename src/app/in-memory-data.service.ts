import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const events = [
      { id: 1, title: 'Go to grocery', date: '2018-01-16' },
      { id: 2, title: 'Movies', date: '2018-01-20' },
      { id: 3, title: 'Test day', date: '2018-01-27' },
      { id: 4, title: 'Pick up laundry', date: '2018-02-07' },
      { id: 5, title: 'Meetup', date: '2018-02-23' },
      { id: 6, title: "John's birthday", date: '2018-02-28' },
      { id: 7, title: 'Meet Kate', date: '2018-02-28' },
      { id: 8, title: 'Doctor', date: '2018-03-12' },
      { id: 9, title: 'Gym class', date: '2018-03-18' },
      { id: 10, title: 'Take cat to the vet', date: '2018-03-18' }
    ];

    return {events};
  }
}
