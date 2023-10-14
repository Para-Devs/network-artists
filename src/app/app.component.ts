import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuBurgerComponent} from './menu-burger/menu-burger.component';
import {ContactFormComponent} from './forms/contact-form/contact-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MenuBurgerComponent, ContactFormComponent],
  template: `
    <app-menu-burger></app-menu-burger>
    <app-contact-form></app-contact-form>
    <h1 class="text-3xl font-bold underline">
      Landing
    </h1>
  `,
  styles: [],
})
export class AppComponent {
}
