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

        <!-- Container for the Team -->
        <div class="flex flex-wrap justify-center text-center">
          <!-- First  -->
          <div class=" text-white m-5 bg-[rgba(235,235,235,0.2)] p-5 rounded">
            <div class="mb-6 flex justify-center">
              <img
                src="../../../assets/img/phil_profil.jpeg"
                class="w-32 rounded-full shadow-lg dark:shadow-black/30" />
            </div>
            <h5 class="mb-4 text-xl font-semibold">PhilippStraub</h5>
            <p class="mb-4">
              <a href="mailto:ps@network-artists.com"
                 class=" text-center mt-10 min-w-[200px] md:p-10 p-5 md:mt-20 mx-5 text-white ">
                ps&#64;network-artists.com</a>
            </p>
          </div>

          <!-- Second -->
          <div class="text-white m-5 bg-[rgba(235,235,235,0.2)] drop-shadow p-5 rounded">
            <div class="mb-6 flex justify-center ">
              <img
                src="../../../assets/img/andrew_profil.png"
                class="w-32 rounded-full shadow-lg dark:shadow-black/30" />
            </div>
            <h5 class="mb-4 text-xl font-semibold">Andrew van Ginneken</h5>
            <p class="mb-4">
              <a href="mailto:avg@network-artists.com"
                 class="text-center mt-20  min-w-[200px] md:p-10 p-5 md:mt-10 mx-5 text-white ">
                avg&#64;network-artists.com</a>
            </p>
          </div>
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
