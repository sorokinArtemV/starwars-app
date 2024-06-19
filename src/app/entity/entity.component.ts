import { Component, computed, input, output } from '@angular/core';
import { NavEntity } from '../nav-entity.model';


@Component({
  selector: 'app-entity',
  standalone: true,
  imports: [],
  templateUrl: './entity.component.html',
  styleUrl: './entity.component.scss'
})
export class EntityComponent {
  navEntity = input.required<NavEntity>();
  isSelected = input.required<boolean>();

  imagePath = computed(() => `assets/${this.navEntity().image}`);

  selected = output<string>();

  onSelectElement() {
    this.selected.emit(this.navEntity().id);
  }
}
