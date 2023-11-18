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
      </section>
    <section data-aos="fade-in" class=" bg-[rgba(235,235,235,0.8)]">
      <div class="p-10 h-56 flex flex-col items-center justify-center ">
      <h1>WE ARE NETWORK ARTISTS.</h1>
        <p class="mt-10">A 360o music consultancy group and talent buying company that belongs at the heart of music, culture and brands.
          Who are we? The same as you: curious minds looking to connect deeper than the surface and using music to pursue the future of sound.</p>
      </div>
    </section>
    <section data-aos="fade-right" class="bg-slate-800 h-1/2"></section>
    <section data-aos="fade-up" class=" bg-[rgba(235,235,235,0.8)]">
      <div class="p-10 h-56 flex flex-col items-center justify-center ">
      <h1>OUR PURPOSE </h1>
        <p class="mt-10">The purpose behind our company is to
          CONNECT DOTS AND COMBINE WORKFORCES to fulfil desires and the gap in the market.</p>

        <p class="mt-5">

          Philipp Straub and Andrew van Ginneken were the first to incite this connection. Drawing from their numerous endeavours, rich experiences and achievements to build trust within the music industry they successfully created NETWORK ARTISTS.
        </p>
      </div>
    </section>
    <section data-aos="fade-right" class="bg-slate-800 h-1/2"></section>
    <section data-aos="fade-up" class=" bg-[rgba(235,235,235,0.8)]">
      <div class="p-10 h-56 flex flex-col items-center justify-center ">
      <h1>OUR PURPOSE </h1>
        <p class="mt-10">The purpose behind our company is to
          CONNECT DOTS AND COMBINE WORKFORCES to fulfil desires and the gap in the market.</p>

        <p class="mt-5">

          Philipp Straub and Andrew van Ginneken were the first to incite this connection. Drawing from their numerous endeavours, rich experiences and achievements to build trust within the music industry they successfully created NETWORK ARTISTS.
        </p>
      </div>
    </section>
    <section class="h-full"></section>
 `,
  styles: [],
  animations: [fadeInOut('2s')]
})
export class AppComponent  {
}
