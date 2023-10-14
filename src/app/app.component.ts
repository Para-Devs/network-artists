import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuBurgerComponent} from './menu-burger/menu-burger.component';
import {ContactFormComponent} from './forms/contact-form/contact-form.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MenuBurgerComponent, ContactFormComponent, TranslateModule],
  template: `
      <section class="w-full h-full">
          <app-menu-burger></app-menu-burger>
          <app-contact-form></app-contact-form>
          <h1 class="text-3xl font-bold underline">
              {{'welcome' | translate}}
          </h1>
      </section>
      <section class="w-full h-full bg-slate-800 flex">
        <div class="md:w-[40%] md:h-full">

        </div>
        <div class="md:w-[60%] md:h-full">
          <img alt="placeholder" class="md:h-full" src="../assets/img/placeholder.png"/>
        </div>
      </section>
  `,
  styles: [],
})
export class AppComponent {
}
