import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../models/Character.model';

const INITIAL_CHARACTERS: Character[] = [
  {
    id: 1,
    name: 'Goku',
    power: 9001,
  },
];

const getCharactersFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : INITIAL_CHARACTERS;
};

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  characters = signal<Character[]>([]);

  constructor() {
    this.characters.set(getCharactersFromLocalStorage());
  }

  saveLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(newCharacter: Character) {
    this.characters.update((items) => [...items, newCharacter]);
  }
}
