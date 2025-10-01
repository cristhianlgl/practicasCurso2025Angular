import { Injectable, signal } from '@angular/core';
import { Character } from '../models/Character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  characters = signal<Character[]>([]);
  constructor() {
    this.characters.set([
      {
        id: 1,
        name: 'Goku',
        power: 9001,
      },
      {
        id: 2,
        name: 'Vegeta',
        power: 8000,
      },
    ]);
  }
  addCharacter(newCharacter: Character) {
    this.characters.update((items) => [...items, newCharacter]);
  }
}
