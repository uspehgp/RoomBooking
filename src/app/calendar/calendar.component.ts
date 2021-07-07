import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Booking} from '../model/booking';
import {Router} from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {


  bookings: Array<Booking>;

  constructor(private dataService: DataService,
              private router: Router) {
  }

  ngOnInit() {
    this.dataService.getBookings().subscribe(
      next => this.bookings = next
    );
  }

  editBooking(id: number) {
    this.router.navigate(['editBooking'], {queryParams: {id}});
  }
}
