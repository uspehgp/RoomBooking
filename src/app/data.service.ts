import {Injectable} from '@angular/core';
import {Layout, LayoutCapacity, Room} from './model/room';
import {User} from './model/user';
import {Observable, of} from 'rxjs';
import {Booking} from './model/booking';
import {formatDate} from '@angular/common';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    console.log(environment.restUrl);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(environment.restUrl + '/api/users/' + id)
      .pipe(map(data => {
        return User.fromHttp(data);
      }));
  }

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(environment.restUrl + '/api/users/')
      .pipe(map(data => {
        const users = new Array<User>();
        for (const user of data) {
          users.push(User.fromHttp(user));
        }
        return users;
      }));
  }

  getRooms(): Observable<Array<Room>> {
    return this.http.get<Array<Room>>(environment.restUrl + '/api/rooms')
      .pipe(map(data => {
        const rooms = new Array<Room>();
        for (const room of data) {
          rooms.push(Room.fromHttp(room));
        }
        return rooms;
      }));
  }

  updateUser(user: User): Observable<User> {
    return of(null);
  }

  addUser(newUser: User, password: string): Observable<User> {
    return of(null);
  }

  deleteUser(id: number): Observable<any> {
    return of(null);
  }

  resetPassword(id: number): Observable<any> {
    return of(null);
  }

  updateRoom(room: Room): Observable<Room> {
    return of(null);
  }

  addRoom(newRoom: Room): Observable<Room> {
    return of(null);
  }

  deleteRoom(id: number): Observable<any> {
    return of(null);
  }

  getBookings(date: string): Observable<Array<Booking>> {
    return of(null);
  }

  getBooking(id: number): Observable<Booking> {
    return of(null);
  }

  saveBooking(booking: Booking): Observable<Booking> {
    return of(null);
  }

  addBooking(newBooking: Booking): Observable<Booking> {
    return of(null);
  }

  deleteBooking(id: number): Observable<any> {
    return of(null);
  }

}
