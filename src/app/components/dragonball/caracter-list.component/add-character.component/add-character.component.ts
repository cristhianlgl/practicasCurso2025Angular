import { Component, output, signal } from '@angular/core';
import { Character } from '../../../../models/Character.model';

@Component({
  selector: 'app-add-character',
  imports: [],
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
  name = signal('');
  power = signal(0);
  emitCharacter = output<Character>();

  addCharacter() {
    const newName = this.name();
    const newPower = this.power();
    if (!newName || !newPower || newPower <= 0) return;

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: newName,
      power: newPower,
    };
    this.emitCharacter.emit(newCharacter);
    //limpiar el formulario
    this.name.set('');
    this.power.set(0);
  }
}
