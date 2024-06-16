import { Component, computed } from '@angular/core';
import { navigationElements } from '../navigation-elements';

const randomIndex = () => Math.floor(Math.random() * navigationElements.length);


@Component({
  selector: 'app-entity',
  standalone: true,
  imports: [],
  templateUrl: './entity.component.html',
  styleUrl: './entity.component.scss'
})
export class EntityComponent {
  selectedElement = navigationElements[randomIndex()];

  imagePath = computed(() => `./assets/${this.selectedElement.image}`);
}
