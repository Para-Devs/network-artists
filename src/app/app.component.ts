import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuBurgerComponent} from './menu-burger/menu-burger.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MenuBurgerComponent],
  template: `
    <app-menu-burger></app-menu-burger>
    <h1 class="text-3xl font-bold underline">
      Landing
    </h1>
  `,
  styles: [],
})
export class AppComponent {
}
