import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryRegionService implements InMemoryDbService {
  createDb() {
    const region = [
        "RK"
    ];
    return {region};
  }
}