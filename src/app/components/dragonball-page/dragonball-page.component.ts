import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page.component',
  imports: [],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {
  name = signal('');
  power = signal(0);
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
      {
        id: 3,
        name: 'Gohan',
        power: 5000,
      },
    ]);
  }

  addCharacter() {
    const newName = this.name();
    const newPower = this.power();
    if (!newName || !newPower || newPower <= 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: newName,
      power: newPower,
    };

    this.characters.update((items) => [...items, newCharacter]);
    this.name.set('');
    this.power.set(0);
  }
}
