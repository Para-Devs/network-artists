import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuBurgerComponent} from './menu-burger/menu-burger.component';
import {ContactFormComponent} from './forms/contact-form/contact-form.component';
import {TranslateModule} from '@ngx-translate/core';
import {animate, style, transition, trigger} from '@angular/animations';
function fadeInOut(fadeInTime = '1s', fadeOutTime = '1s') {
  return trigger(
    'fadeInOut',
    [
      transition(
        ':enter',
        [
          style({  opacity: 0 }),
          animate(fadeOutTime+ ' ease-out',
            style({  opacity: 1 }))
        ]
      ),
      transition(
        ':leave',
        [
          style({ opacity: 1 }),
          animate(fadeInTime+' ease-in',
            style({ opacity: 0 }))
        ]
      )
    ]
  );
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MenuBurgerComponent, ContactFormComponent, TranslateModule],
  template: `
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-800 rounde-md z-50 drop-shadow-xl p-5">
      <h2 class="text-white">{{'coming_soon' | translate}}</h2>
    </div>
      <section [@fadeInOut]="true" class="w-full h-full">
        <div class="logo">
          <img src="../assets/img/Network_Artist_Logo_white.svg" alt="test">
        </div>

        <div class="btn">
          <button><a href="mailto:lj@network-artists.com">{{'contact' | translate}}</a></button>
        </div>
      </section>
 `,
  styles: [],
  animations: [fadeInOut('2s')]
})
export class AppComponent  {
}
