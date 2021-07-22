import {Component, OnInit} from '@angular/core';
import {Room} from '../../model/room';
import {DataService} from '../../data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormResetService} from '../../form-reset.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Array<Room>;
  selectedRoom: Room;
  action: string;
  loadingData = true;
  message = 'Please waite the data is loading';
  reloadAttempts = 0;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router,
              private formResetService: FormResetService) {
  }

  loadData() {
    this.dataService.getRooms().subscribe(next => {
        this.rooms = next;
        this.loadingData = false;
        this.processUrlParams();
      },
      error => {
        if (error.status === 402) {
          this.message = 'Sorry you nees pay to use this application.';
        } else {
          this.reloadAttempts++;
          if (this.reloadAttempts <= 10) {
            this.message = 'Sorry something went wrong... trying again.';
            this.loadData();
          } else {
            this.message = 'Sorry something went wrong, please contact support';
          }
        }
      }
    );
  }

  processUrlParams() {
    this.route.queryParams.subscribe(
      (params) => {
        this.action = null;
        const id = params['id'];
        if (id) {
          this.selectedRoom = this.rooms.find((room) => room.id === +id);
          this.action = params['action'];
        }
        if (params['action'] === 'add') {
          this.selectedRoom = new Room();
          this.action = 'edit';
          this.formResetService.resetRoomFormEvent.emit(this.selectedRoom);
        }
      }
    );
  }

  ngOnInit() {

    this.loadData();
  }

  setRoom(id: number) {
    this.router.navigate(['admin', 'rooms'], {queryParams: {id, action: 'view'}});
  }

  addRoom() {
    this.router.navigate(['admin', 'rooms'], {queryParams: {action: 'add'}});
  }
}
