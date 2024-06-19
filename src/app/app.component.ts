import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { EntityComponent } from './entity/entity.component';
import { navigationElements } from './navigation-elements';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    EntityComponent,
    GeneralInfoComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  navElements = navigationElements;
  selectedElementId ?: string;

  get selectedElement() {
    return this.navElements.find(el => el.id === this.selectedElementId);
  }

  onSelectElement(id: string) {
    this.selectedElementId = id;
  }
}


