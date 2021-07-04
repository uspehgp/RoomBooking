import {Layout, Room} from './room';
import {User} from './user';

export class Booking {
  id: number;
  room: Room;
  user: User;
  layout: Layout;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  participants: number;

  getDateAsDate() {
    return new Date(this.date);
  }
}
