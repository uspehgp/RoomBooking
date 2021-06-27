import {Component, Input, OnInit} from '@angular/core';
import {Room} from '../../../model/room';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css']
})
export class RoomEditComponent implements OnInit {

  @Input()
  room: Room;

  constructor() {
  }

  ngOnInit() {
  }

}
