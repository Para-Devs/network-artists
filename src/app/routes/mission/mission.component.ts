import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';
import {fadeInOut} from '../../animations';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [CommonModule],
  template: `
      <section [@fadeInOut]="true" class="w-full h-full flex  items-center flex-col bg overflow-x-hidden">
              <h1 class="text-center mt-32 leading-[37px] md:leading-[100px] text-white uppercase text-[50px] md:text-[130px]">Our mission<br>Is to
                  connect</h1>
              <h2 class="text-center mt-20  leading-[30px] md:leading-[90px] p-10 text-white uppercase  text-[40px] md:text-[130px] border-2 border-white font-extralight">
                  The dots.</h2>
      </section>
  `,
  styles: [`

  `],
  animations: [fadeInOut('4s')]
})
export class MissionComponent implements OnInit, OnDestroy {
  doc = inject(DOCUMENT);
  ngOnInit() {
    this.doc.body.classList.add("mission");
  }
  ngOnDestroy() {
    this.doc.body.classList.remove("mission");

  }
}
