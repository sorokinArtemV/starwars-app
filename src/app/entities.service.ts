import { Injectable } from '@angular/core';
import { NavEntity } from './nav-entity.model';
import { NavElementTypes } from './nav-element-types';


@Injectable({
  providedIn: 'root'
})
export class EntitiesService {
  private readonly entities = [
    {
      id: '1',
      type: NavElementTypes.Characters,
      image: 'icon-1.png',
      link: 'https://swapi.dev/api/people',
      description: 'List of all characters'
    },
    {
      id: '2',
      type: NavElementTypes.Movies,
      image: 'icon-2.png',
      link: 'https://swapi.dev/api/films',
      description: 'List of all movies'
    },
    {
      id: '3',
      type: NavElementTypes.Starships,
      image: 'icon-3.png',
      link: 'https://swapi.dev/api/starships',
      description: 'List of all starships'
    },
    {
      id: '4',
      type: NavElementTypes.Vehicles,
      image: 'icon-4.png',
      link: 'https://swapi.dev/api/vehicles',
      description: 'List of all vehicles'
    },
    {
      id: '5',
      type: NavElementTypes.Species,
      image: 'icon-5.png',
      link: 'https://swapi.dev/api/species',
      description: 'List of all people'
    },
    {
      id: '6',
      type: NavElementTypes.Planets,
      image: 'icon-6.png',
      link: 'https://swapi.dev/api/planets',
      description: 'List of all planets'
    }
  ];

  constructor() {
  }

  getAllEntities(): NavEntity[] {
    return this.entities;
  };

  getEntityById(id: string | undefined): NavEntity | undefined {
    return this.entities.find(entity => entity.id === id);
  }

  async getDataFromApi(type: string) {
    const index = this.entities.findIndex(entity => entity.type === type);
    const data = await fetch(this.entities[index].link, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });

    return await data.json() ?? [];
  }

  async getEntityByDirectLink(link: string) {
    const data = await fetch(link, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return await data.json() ?? [];
  }
}
