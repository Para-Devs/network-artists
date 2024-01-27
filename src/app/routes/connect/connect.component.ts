import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';
import {NavComponent} from '../../core/nav/nav.component';
import {fadeInOut} from '../../animations';

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [CommonModule, NavComponent],
  template: `
      <section  [@fadeInOut]="true" class="w-full h-full flex  items-center flex-col overflow-x-hidden">
          <h1 class="text-center mt-20 md:leading-[100px] text-white uppercase md:text-[130px] text-[80px] leading-[60px]">
              Curious<br>to know more?</h1>
          <div class="w-full h-full md:mt-40 md:block flex   justify-center items-center flex-col">
              <a href="mailto:ps@network-artists.com"
                 class=" bg-[rgba(0,0,35,0.7)] text-center mt-20  min-w-[200px] md:p-10 p-5 md:mt-20 mx-5 text-white uppercase text-[30px] border-2 border-[rgba(235,235,235,0.4)] shadow-white drop-shadow-2xl rounded-md">
                  ps&#64;network-artists.com</a>
              <a href="mailto:avg@network-artists.com"
                 class="text-center bg-[rgba(0,0,35,0.7)] mt-20  min-w-[200px] md:p-10 p-5 md:mt-10 mx-5 text-white uppercase text-[30px] border-2 border-[rgba(235,235,235,0.4)] shadow-white drop-shadow-2xl rounded-md">
                  avg&#64;network-artists.com</a>
          </div>
      </section>
  `,
  styles: ``,
  animations: [fadeInOut('2s')]
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
