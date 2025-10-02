import { Component, inject} from '@angular/core';
import { CaracterListComponent } from "../dragonball/caracter-list.component/caracter-list.component";
import { AddCharacterComponent } from "../dragonball/caracter-list.component/add-character.component/add-character.component";
import { CharacterService } from '../../services/character.service';


@Component({
  selector: 'app-dragonball-super-page.component',
  imports: [CaracterListComponent, AddCharacterComponent],
  templateUrl: './dragonball-super-page.component.html',
})
export class DragonballSuperPageComponent {
  characters = inject(CharacterService).characters;
  addCharacter = inject(CharacterService).addCharacter;
}
