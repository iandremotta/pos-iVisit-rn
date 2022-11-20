import { generateId } from '../utils/generateId';

export class Visit {
  constructor(title, address, location) {
    this.title = title;
    this.address = address;
    this.location = location;
    this.id = generateId();
  }
}
