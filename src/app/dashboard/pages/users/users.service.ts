import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Users {
  id: Number;
  name: string;
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): Observable<Users[]>{
    return new Observable((Subscriber) => {
      Subscriber.next([])
    });
  }
}
