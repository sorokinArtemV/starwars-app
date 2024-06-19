import { Component } from '@angular/core';
import { EntityComponent } from '../entity/entity.component';
import { GeneralInfoComponent } from '../general-info/general-info.component';
import { HeaderComponent } from '../header/header.component';
import { navigationElements } from '../navigation-elements';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    EntityComponent,
    GeneralInfoComponent,
    HeaderComponent,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  navElements = navigationElements;
  selectedElementId ?: string;

  get selectedElement() {
    return this.navElements.find(el => el.id === this.selectedElementId);
  }

  onSelectElement(id: string) {
    this.selectedElementId = id;
  }
}
