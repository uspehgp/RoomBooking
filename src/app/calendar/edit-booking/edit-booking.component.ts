import {Component, OnInit} from '@angular/core';
import {Booking} from '../../model/booking';
import {Layout, Room} from '../../model/room';
import {DataService} from '../../data.service';
import {User} from '../../model/user';
import {ActivatedRoute, Router} from '@angular/router';

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

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.dataService.getRooms().subscribe(
      next => this.rooms = next
    );
    this.dataService.getUsers().subscribe(
      next => this.users = next
    );
    const id = this.route.snapshot.queryParams['id'];
    this.dataService.getBooking(+id).subscribe(
      next => this.booking = next
    );
  }

  onSubmit() {
    this.dataService.saveBooking(this.booking).subscribe(
      () => this.router.navigate([''])
    );
  }
}
