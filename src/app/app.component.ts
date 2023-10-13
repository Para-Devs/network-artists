import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 class="text-3xl font-bold underline">
      Landing
    </h1>
  `,
  styles: [],
})
export class AppComponent {
}
