import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntitiesService } from '../entities.service';
import { NavElementTypes } from '../nav-element-types';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  protected readonly NavElementTypes = NavElementTypes;

  route: ActivatedRoute = inject(ActivatedRoute);
  elType = '';
  entitiesService = inject(EntitiesService);
  data: any; // later

  constructor() {
    this.elType = this.route.snapshot.params['type'];
  }

  async ngOnInit() {
    this.data = await this.entitiesService.getDataFromApi(this.elType);
    console.log(this.data);

    await this.changeLinksToNames();
  }

  async changeLinksToNames(): Promise<void> {
    if (this.data?.results) {
      for (const result of this.data.results) {
        if (result.films) result.films = await this.getNamesFromLinks(result.films);
        if (result.species) result.species = await this.getNamesFromLinks(result.species);
        if (result.starships) result.starships = await this.getNamesFromLinks(result.starships);
        if (result.vehicles) result.vehicles = await this.getNamesFromLinks(result.vehicles);
        if (result.homeworld) result.planets = await this.getNamesFromLinks(result.planets);
      }
    }
  }

  async getNamesFromLinks(links: string[]): Promise<string[]> {
    const names: string[] = [];

    for (const link of links) {
      const entityData = await this.entitiesService.getEntityByDirectLink(link);
      if (entityData && entityData.name) names.push(entityData.name);
    }

    return names;
  }
}
