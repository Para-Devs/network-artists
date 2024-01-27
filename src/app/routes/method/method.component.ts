import {Component, inject} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-method',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="w-full h-full method">
<div class="w-full h-full flex flex-row justify-center items-center text-center z-999">
  <div><img class="" src="../../../assets/img/Network_Artist_Method_Background.png" alt=""></div>
  <div class=" text-white  p-5 methods planning ">
    <ul class="space-y-4">
      <li class="flex items-center">
        <span class="text-2xl">01</span>
        <h3 class="ml-2 uppercase font-bold text-3xl">
          Planning
        </h3>
      </li>
      <li class="flex items-center">
        <svg class="h-6 w-6 flex-none fill-transparent stroke-white stroke-2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="11" />
          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
        </svg>
        <p class="ml-4">
          Brand Consultancy
        </p>
      </li>
      <li class="flex items-center">
        <svg class="h-6 w-6 flex-none fill-transparent stroke-white stroke-2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="11" />
          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
        </svg>
        <p class="ml-4">
         360° Global Strategy
        </p>
      </li>
      <li class="flex items-center">
        <svg class="h-6 w-6 flex-none fill-transparent stroke-white stroke-2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="11" />
          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
        </svg>
        <p class="ml-4 text-left">Support on artist <br> management</p>
      </li>
    </ul>
  </div>
  <div class=" left-1/4 text-white  p-5 methods activation ">
    <ul class="space-y-4">
      <li class="flex items-center ">
        <span class="text-2xl">02</span>
        <h3 class="ml-2 uppercase font-bold text-3xl">
          activation
        </h3>
      </li>
      <li class="flex items-center">
        <svg class="h-6 w-6 flex-none fill-transparent stroke-white stroke-2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="11" />
          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
        </svg>
        <p class="ml-4">
          Brand Consultation
        </p>
      </li>
      <li class="flex items-center">
        <svg class="h-6 w-6 flex-none fill-transparent stroke-white stroke-2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="11" />
          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
        </svg>
        <p class="ml-4">
           360° Global Strategy
        </p>
      </li>
      <li class="flex items-center">
        <svg class="h-6 w-6 flex-none fill-transparent stroke-white stroke-2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="11" />
          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
        </svg>
        <p class="ml-4">lorem ipsum</p>
      </li>
    </ul>
  </div>
  <div class="right-1/4 text-white  p-5 methods execution ">
    <ul class="space-y-4">
      <li class="flex items-center">
        <span class="text-2xl">03</span>
        <h3 class="ml-2 uppercase font-bold text-3xl">
          Execution
        </h3>
      </li>
      <li class="flex items-center">
        <svg class="h-6 w-6 flex-none fill-transparent stroke-white stroke-2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="11" />
          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
        </svg>
        <p class="ml-4">
          lorem ipsum
        </p>
      </li>

      <li class="flex items-center">
        <svg class="h-6 w-6 flex-none fill-transparent stroke-white stroke-2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="11" />
          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
        </svg>
        <p class="ml-4">
          lorem ipsum
        </p>
      </li>
      <li class="flex items-center">
        <svg class="h-6 w-6 flex-none fill-transparent stroke-white stroke-2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="11" />
          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
        </svg>
        <p class="ml-4">lorem ipsum</p>
      </li>
    </ul>
  </div>




</div>

    </section>
  `,
  styles: ` `,
})
export class MethodComponent {
  doc = inject(DOCUMENT);
  ngOnInit() {
    this.doc.body.classList.add("method");
  }
  ngOnDestroy() {
    this.doc.body.classList.remove("method");
  }
}
