import { Component } from '@angular/core';
import { EntityComponent } from '../entity/entity.component';
import { GeneralInfoComponent } from '../general-info/general-info.component';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { EntitiesService } from '../entities.service';

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
  navElements = this.appService.getAllEntities();
  selectedElementId ?: string;

  constructor(private readonly appService: EntitiesService) {
  }


  get selectedElement() {
    return this.appService.getEntityById(this.selectedElementId);
  }

  onSelectElement(id: string) {
    this.selectedElementId = id;
  }
}
