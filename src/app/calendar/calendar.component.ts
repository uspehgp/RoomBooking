import {Component, OnInit} from '@angular/core';
import {formatDate} from '@angular/common';
import {DataService} from '../data.service';
import {Booking} from '../model/booking';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {


  bookings: Array<Booking>;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getBookings().subscribe(
      next => this.bookings = next
    );
  }

}
