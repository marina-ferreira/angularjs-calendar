import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const events = [
      { id: 1, title: 'Go to grocery' },
      { id: 2, title: 'Movies' },
      { id: 3, title: 'Test day' },
      { id: 4, title: 'Pick up laundry' },
      { id: 5, title: 'Meetup' },
      { id: 6, title: "John's birthday" },
      { id: 7, title: 'Meet Kate' },
      { id: 8, title: 'Doctor' },
      { id: 9, title: 'Gym class' },
      { id: 10, title: 'Take cat to the vet' }
    ];

    return {events};
  }
}
