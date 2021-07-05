import {Component, OnInit} from '@angular/core';
import {Booking} from '../../model/booking';
import {Layout, Room} from '../../model/room';
import {DataService} from '../../data.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent implements OnInit {

  booking: Booking;
  rooms: Array<Room>;
  layouts = Object.keys(Layout);
  layoutEnum = Layout;
  users: Array<User>;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getRooms().subscribe(
      next => this.rooms = next
    );
    this.dataService.getUsers().subscribe(
      next => this.users = next
    );
  }

}
