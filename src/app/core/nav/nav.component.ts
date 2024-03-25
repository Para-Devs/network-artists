import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {appRoutes} from '../../app.routes';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MenuBurgerComponent} from "../burger/burger.component";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink, MenuBurgerComponent],
  template: `
    <div class="w-full bg-slate-800 text-white md:block top-0 left-0 z-[9999] sticky">
    <div class="hidden w-full mx-auto md:flex justify-between px-20 py-5 border-b-[1px] border-b-white">
      <a routerLinkActive="active-route" class="route" routerLink="home">Network</a>
      <a routerLinkActive="active-route" class="route" routerLink="vision">Vision</a>
      <a routerLinkActive="active-route" class="route" routerLink="mission">Mission</a>
      <a routerLinkActive="active-route" class="route" routerLink="method">Method</a>
      <a routerLinkActive="active-route" class="route"  routerLink="service">Service</a>
      <a routerLinkActive="active-route" class="route" routerLink="connect">Connect</a>
    </div>
      <div class="md:hidden block relative md:flex justify-between px-5 py-5 ">
        <p class="text-white">Network Artists</p>
        <app-burger></app-burger>

      </div>
    </div>
  `,
  styles: [`
    .active-route {
      @apply font-bold  scale-105;
      text-shadow: 1px 1px 2px transparent, 0 0 1em transparent, 0 0 0.2em rgba(255, 255, 255, 0.4);
    }

    .route {
      @apply text-white uppercase   transition-all ease-in-out  hover:scale-105 hover:font-bold;
    }`
  ]
})
export class NavComponent {
  routes = appRoutes;
}
