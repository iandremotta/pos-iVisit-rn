import { generateId } from '../utils/generateId';

export class Visit {
  constructor(title, experience, location) {
    this.title = title;
    this.experience = experience;
    this.address = location?.address;
    this.location = {
      latitude: location?.latitude,
      longitude: location?.longitude,
    };
    this.id = generateId();
  }
}
