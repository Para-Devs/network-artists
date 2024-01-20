import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {appRoutes} from '../../app.routes';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  template: `
    <div class="w-full">
    <div class=" w-full  mx-auto flex justify-between px-20 py-5 border-b-[1px] border-b-white">
      <a routerLinkActive="active-route" class="route" routerLink="vision">Vision</a>
      <a routerLinkActive="active-route" class="route" routerLink="mission">Mission</a>
      <a routerLinkActive="active-route" class="route" routerLink="method">Method</a>
      <a routerLinkActive="active-route" class="route"  routerLink="service">Service</a>
      <a routerLinkActive="active-route" class="route" routerLink="connect">Connect</a>
    </div>
    </div>
  `,
  styles: `
  .active-route {
    @apply underline;
  }
  .route {
    @apply text-white uppercase;
  }
  `
})
export class NavComponent {
  routes = appRoutes;
}
