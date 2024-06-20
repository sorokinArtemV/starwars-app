import { Component, inject, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EntitiesService } from '../entities.service';

@Component({
  selector: 'app-general-info',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './general-info.component.html',
  styleUrl: './general-info.component.scss'
})
export class GeneralInfoComponent {
  elType = input<string | undefined>();
  elDescription = input<string | undefined>();
}
