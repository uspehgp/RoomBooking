import {Component, Input, OnInit} from '@angular/core';
import {Room} from '../../../model/room';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css']
})
export class RoomEditComponent implements OnInit {

  @Input()
  room: Room;

  roomForm = new FormGroup({
    roomName: new FormControl('roomName'),
    location: new FormControl('location')
  });

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.roomForm);
  }
}
