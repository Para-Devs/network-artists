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
      <div class="absolute overflow-hidden bg-cover bg-center bg-no-repeat p-12 text-center h-full w-full" style="background-image: url('../assets/img/networkArtistBackGround.png');">
        <div [@fadeInOut]="true"
          class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
          <div class="flex h-full md:items-center md:justify-center ">
            <div class="text-white md:w-auto w-full md:bg-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.08)] p-10 rounded">
              <div class="logo">
                <img class="svg" src="../assets/img/Network_Artist_Logo_white.svg" alt="test" >
              </div>
              <h1 class="mb-6 mt-6 text-xl test uppercase tracking-tighter">coming soon ...</h1>

              <button
                type="button"
                class="rounded border-[0.5px] border-neutral-50 px-5 mt-5 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 animate-bounce "
                data-te-ripple-init
                data-te-ripple-color="light">
                <a href="mailto:lj@network-artists.com">{{'contact' | translate}}</a>
              </button>
            </div>
          </div>
        </div>
      </div>

 `,
  styles: [

    `
      .pulse {
        animation: pulse-animation 2s infinite;
      }

      @keyframes pulse-animation {
        0% {
          box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.6);
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
export class AppComponent  {
}
