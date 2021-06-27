import {Component, OnInit} from '@angular/core';
import {Room} from '../../model/room';
import {DataService} from '../../data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Array<Room>;
  selectedRoom: Room;
  action: string;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.dataService.getRooms().subscribe(next => {
      this.rooms = next;
    });
    this.route.queryParams.subscribe(
      (params) => {
        const id = params['id'];
        this.action = params['action'];
        if (id) {
          this.selectedRoom = this.rooms.find((room) => room.id === +id);
        }
        if (this.action === 'add') {
          this.selectedRoom = new Room();
          this.action = 'edit';
        }
      }
    );
  }

  setRoom(id: number) {
    this.router.navigate(['admin', 'rooms'], {queryParams: {id, action: 'view'}});
  }

  addRoom() {
    this.router.navigate(['admin', 'rooms'], {queryParams: {action: 'add'}});
  }
}
