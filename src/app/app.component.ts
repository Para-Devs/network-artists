import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
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
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="absolute w-full h-full bg-[rgba(25,25,25,0.7)] z-40">
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
