import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 1, name: 'Pai'},
      {id: 2, name: 'SSagar '},
      {id: 3, name: 'Bhupi'},
      {id: 4, name: 'Arron'},
      {id: 5, name: 'Shyam'},
      {id: 6, name: 'Rafiq'},
      {id: 7, name: 'Saumitra'},
      {id: 8, name: 'Rahul'},
      {id: 9, name: 'Aniket'},
      {id: 10, name: 'VaibhaV'}
    ];
    return {heroes};
  }
}
