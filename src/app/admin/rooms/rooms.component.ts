import { Component, OnInit } from '@angular/core';
import {Room} from '../../model/room';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Array<Room>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.rooms = this.dataService.rooms;
  }

}
