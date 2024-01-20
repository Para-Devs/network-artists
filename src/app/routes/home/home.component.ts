import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="absolute w-full h-full bg-[rgba(25,25,25,0.7)] z-40">
      <section class="w-full h-full">
        <div class="logo">
          <img src="../../../assets/img/Network_Artist_Logo_white.svg" alt="test">
        </div>
      </section>
  `,
  styles: ``
})
export class HomeComponent {

}
