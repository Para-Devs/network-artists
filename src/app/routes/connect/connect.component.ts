import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="w-full h-auto flex  items-center flex-col overflow-x-hidden">
        <h1 class="text-center mt-40 md:leading-[100px] text-white uppercase md:text-[130px] text-[80px] leading-[60px]">Curious<br>to know more?</h1>
        <a href="mailto:ps@network-artists.com" class=" bg-[rgba(0,0,35,0.7)] text-center mt-20 leading-[30px] min-w-[200px] md:p-10 p-5 md:m-0 mx-5 text-white uppercase text-[30px] border-2 border-white">
          ps&#64;network-artists.com</a>
      <a href="mailto:avg@network-artists.com" class="text-center bg-[rgba(0,0,35,0.7)] mt-20 leading-[30px] min-w-[200px] md:p-10 p-5 md:m-0 mx-5 text-white uppercase text-[30px] border-2 border-white">
          avg&#64;network-artists.com</a>
    </section>
  `,
  styles: ``
})
export class ConnectComponent implements OnInit, OnDestroy {
  doc = inject(DOCUMENT);
  ngOnInit() {
    this.doc.body.classList.add("connect");
  }
  ngOnDestroy() {
    this.doc.body.classList.remove("connect");

  }
}
