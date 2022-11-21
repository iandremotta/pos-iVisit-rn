import { generateId } from '../utils/generateId';

export class Visit {
  constructor(title, location) {
    this.title = title;
    this.address = location.address;
    this.location = {
      latitude: location.latitude,
      longitude: location.longitude,
    };
    this.id = generateId();
  }
}
