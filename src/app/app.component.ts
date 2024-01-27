import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {RouterOutlet} from '@angular/router';
import {NavComponent} from './core/nav/nav.component';
import {MenuBurgerComponent} from "./core/burger/burger.component";
import {fadeInOut} from './animations';
import {FooterComponent} from './core/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterOutlet, NavComponent, MenuBurgerComponent, FooterComponent],
  template: `
    <app-nav></app-nav>
    <app-burger></app-burger>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
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
