import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Booking} from '../model/booking';
import {ActivatedRoute, Router} from '@angular/router';
import {formatDate} from '@angular/common';
import {User} from '../model/user';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {


  bookings: Array<Booking>;
  selectedDate: string;

  constructor(private dataService: DataService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.dataService.getUser(13).subscribe((next: User) => {
      console.log(next);
      console.log(typeof next);
      const user: User = next;
      console.log(user.name);
      console.log(typeof user);
      const user2 = next as User;
      console.log(user2);
      console.log(typeof user2);
      const user3 = User.fromHttp(next);
      console.log(user3);
      console.log(typeof user3);
      console.log(user3.getRole());

    });

    this.route.queryParams.subscribe(
      params => {
        this.selectedDate = params['date'];
        if (!this.selectedDate) {
          this.selectedDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-GB');
        }
        this.dataService.getBookings(this.selectedDate).subscribe(
          next => this.bookings = next
        );
      }
    );


  }

  editBooking(id: number) {
    this.router.navigate(['editBooking'], {queryParams: {id}});
  }

  addBooking() {
    this.router.navigate(['addBooking']);
  }

  deleteBooking(id: number) {
    this.dataService.deleteBooking(id).subscribe();
  }

  dateChanged() {
    this.router.navigate([''], {queryParams: {date: this.selectedDate}});
  }
}
