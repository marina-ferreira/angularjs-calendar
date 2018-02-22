import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { Event } from './event';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EventService {

  constructor(private http: HttpClient) { }

  private eventsUrl = 'api/events';

  getEventsByDate(date: string): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.eventsUrl}/?date=${date}`)
                    .pipe(catchError(this.handleError<Event[]>('getEventsbyDate', [])));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
