import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';
import {fadeInOut} from '../../animations';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [@fadeInOut]="true" class="w-full h-full flex  items-center flex-col">
      <h1 class="text-center mt-32 leading-[37px] md:leading-[100px] text-white uppercase text-[50px] md:text-[130px]">Bring your<br>Vision to life.</h1>
      <p class="m-3 text-white mt-20 text-center md:text-[30px] md:mx-auto md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">A 360º music consultancy group and talent
        buying company that belongs at the heart of music, culture and brands.
          Who are we? The same as you: curious minds looking to connect deeper than the surface and using music to pursue the future of sound.</p>

      <div class="fixed  bottom-0 mb-1.5 pr-2 w-full text-white flex justify-end ">
        <p class="footer-text uppercase text-4xl font-extralight text-[rgba(255,255,255,0.3)] ">Vision</p>
      </div>
    </section>
  `,
  styles: ``,
  animations: [fadeInOut('2s')]
})
export class VisionComponent implements OnInit,OnDestroy{
  doc = inject(DOCUMENT);
  ngOnInit() {
    this.doc.body.classList.add("vision");
  }
  ngOnDestroy() {
    this.doc.body.classList.remove("vision");

  }
}
