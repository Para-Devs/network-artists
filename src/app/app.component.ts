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
    <app-menu-burger></app-menu-burger>
      <section class="w-full h-full">
<!--          <h1 class="text-3xl font-bold underline text-center">-->
<!--              {{'welcome' | translate}}-->
<!--          </h1>-->
        <div class="logo">
          <img src="../assets/img/Network_Artist_Logo_white.svg" alt="test">
        </div>

        <div class="btn">
          <button>more</button>
        </div>
      </section>


    <!--      <section class="w-full h-full bg-slate-800 flex">-->
<!--        <div class="md:w-[40%] md:h-full">-->
<!--        </div>-->

<!--        <div class="md:w-[60%] md:h-full">-->
<!--          <img alt="placeholder" class="md:h-full" src="../assets/img/placeholder.png"/>-->
<!--        </div>-->
<!--      </section>-->
<!--          <app-contact-form></app-contact-form>-->
  `,
  styles: [],
})
export class AppComponent {
}
