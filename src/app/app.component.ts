import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {RouterOutlet} from '@angular/router';
import {NavComponent} from './core/nav/nav.component';
import {MenuBurgerComponent} from "./core/burger/burger.component";
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
  imports: [CommonModule, TranslateModule, RouterOutlet, NavComponent, MenuBurgerComponent],
  template: `
    <app-nav></app-nav>
    <router-outlet></router-outlet>
 `,
  styles: [

    `
      .pulse {
        animation: pulse-animation 2s infinite;
      }

      @keyframes pulse-animation {
        0% {
          box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.6);
        }
        100% {
          box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
        }
      }

      @media (max-width:900px){
        .master{
          display:none
        }
      }
    `
  ],
  animations: [fadeInOut('2s')]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log(window);
  }
}
