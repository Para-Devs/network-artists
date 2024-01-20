import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
      <section class="w-full h-full flex justify-center items-center">
        <div class="logo scale-75">
          <img src="../../../assets/img/Network_Artist_Logo_white.svg" alt="test">
        </div>
      </section>
  `,
  styles: ``
})
export class HomeComponent {

}
