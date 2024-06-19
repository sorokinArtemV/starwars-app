import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  width = signal('200');

  onSelectedElement() {
    this.width.set(this.width() === '200' ? '400' : '200');
  }
}
