import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="w-full h-full flex  items-center flex-col">
      <h1 class="text-center mt-40 md:leading-[90px] leading-[36px] text-white uppercase text-[50px] md:text-[130px]">Bring your<br>Vision to life.</h1>
        <p class="md:mx-32 mx-5 md:text-[30px] text-white mt-20">A 360º music consultancy group and talent buying company that belongs at the heart of music, culture and brands.

          Who are we? The same as you: curious minds looking to connect deeper than the surface and using music to pursue the future of sound.</p>
    </section>
  `,
  styles: ``
})
export class VisionComponent {

}
