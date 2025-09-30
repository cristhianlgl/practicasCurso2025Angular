import { Component, signal } from '@angular/core';
import { Character } from '../../models/Character.model';
import { CaracterListComponent } from "../dragonball/caracter-list.component/caracter-list.component";


@Component({
  selector: 'app-dragonball-super-page.component',
  imports: [CaracterListComponent],
  templateUrl: './dragonball-super-page.component.html',
})
export class DragonballSuperPageComponent {
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
