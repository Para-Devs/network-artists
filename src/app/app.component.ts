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
    <div class="absolute w-full h-full bg-[rgba(25,25,25,0.7)] z-40">

      <div class="btn">
        <button><a href="mailto:lj@network-artists.com">{{'contact' | translate}}</a></button>
      </div>
    </div>
    <div class="pulse orange absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-[rgba(35,35,35,1)] flex justify-center items-center border -translate-y-1/2 rounded-full z-50 drop-shadow-2xl shadow-green-400 p-5">
      <img class=" ml-4 md:h-56 md:w-56 h-24 w-24" src="../assets/coming_soon.svg" alt="test">
    </div>
      <section [@fadeInOut]="true" class="w-full h-full">
        <div class="logo">
          <img src="../assets/img/Network_Artist_Logo_white.svg" alt="test">
        </div>
      </section>
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
