export class Room {
  id: number;
  name: string;
  location: string;
  capacities: Array<LayoutCapacity>;

}

export class LayoutCapacity {
  layout: Layout;
  capacities: number;
}

export enum Layout {
  THEATER = 'Theater',
  SHAPE = 'U-shape',
  BOARD = 'Board Meeting'

}
