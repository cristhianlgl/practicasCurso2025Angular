import { Component, input } from '@angular/core';
import { Character } from '../../../models/Character.model';

@Component({
  selector: 'app-caracter-list',
  imports: [],
  templateUrl: './caracter-list.component.html',
})
export class CaracterListComponent {
  characters = input.required<Character[]>();
  title = input();
}
