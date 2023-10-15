import {Component, OnInit} from '@angular/core';
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
        <div class="logo fadeIn">
          <img src="../assets/img/Network_Artist_Logo_white.svg" alt="test">
        </div>

        <div class="btn">
          <button>more</button>
        </div>
      </section>
 `,
  styles: [],
})
export class AppComponent implements OnInit{
    ngOnInit(): void {
     this.fadeInFC()

    }

    fadeInFC():void{
      setTimeout(() => {
        const logo = document.querySelector('.fadeIn') as HTMLElement;
        if (logo) {
          logo.style.opacity = "1"
        }
      }, 1000)

    }
}
