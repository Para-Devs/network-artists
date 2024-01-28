import {Component, inject} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';
import {fadeInOut} from "../../animations";

@Component({
  selector: 'app-method',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="w-full h-full " [@fadeInOut]="true">
      <div class="big flex justify-center items-center ">
        <img class="bg-center bg- bg-no-repeat bg-fixed method-img mt-4 hidden sm:block md:w-2/3 sm:w-full"
             src="../../../assets/img/network_method_all.png" alt="">
      </div>

      <div class="mobile flex flex-col justify-items-start content-center flex-wrap sm:hidden">
        <div class="planning bg-[rgba(235,235,235,0.2)] m-3 rounded">
          <div class=" text-white  p-5 methods planning ">
            <ul class="space-y-4">
              <li class="flex items-center">
                <span class="text-2xl">01.</span>
                <h3 class="ml-2 uppercase font-bold text-2xl">
                  Planning
                </h3>
              </li>
              <li class="flex items-center">
                <svg class="h-6 w-6 flex-none fill-transparent stroke-white stroke-2" stroke-linecap="round"
                     stroke-linejoin="round">
                  <circle cx="12" cy="12" r="11"/>
                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none"/>
                </svg>
                <p class="ml-4">
                  Brand Consultancy
                </p>
              </li>
              <li class="flex items-center">
                <svg class="h-6 w-6 flex-none fill-transparent stroke-white stroke-2" stroke-linecap="round"
                     stroke-linejoin="round">
                  <circle cx="12" cy="12" r="11"/>
                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none"/>
                </svg>
                <p class="ml-4">
                  360° Global Strategy
                </p>
              </li>
              <li class="flex items-center">
                <svg class="h-6 w-6 flex-none fill-transparent stroke-white stroke-2" stroke-linecap="round"
                     stroke-linejoin="round">
                  <circle cx="12" cy="12" r="11"/>
                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none"/>
                </svg>
                <p class="ml-4 text-left">Support on artist <br> management</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="activation bg-[rgba(235,235,235,0.2)] m-3 rounded fade-in-up">
          <div class=" text-white  p-5 methods planning fade-in-up">
            <ul class="space-y-4">
              <li class="flex items-center">
                <span class="text-2xl">02</span>
                <h3 class="ml-2 uppercase font-bold text-2xl">
                  Activation
                </h3>
              </li>
              <li class="flex items-center">
                <svg class="h-6 w-6 flex-none fill-transparent stroke-white stroke-2" stroke-linecap="round"
                     stroke-linejoin="round">ﬂ
                  <circle cx="12" cy="12" r="11"/>
                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none"/>
                </svg>
                <p class="ml-4">
                  Project Management
                </p>
              </li>
              <li class="flex items-center">
                <svg class="h-6 w-6 flex-none fill-transparent stroke-white stroke-2" stroke-linecap="round"
                     stroke-linejoin="round">
                  <circle cx="12" cy="12" r="11"/>
                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none"/>
                </svg>
                <p class="ml-4">
                  Event Curation
                </p>
              </li>
              <li class="flex items-center">
                <svg class="h-6 w-6 flex-none fill-transparent stroke-white stroke-2" stroke-linecap="round"
                     stroke-linejoin="round">
                  <circle cx="12" cy="12" r="11"/>
                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none"/>
                </svg>
                <p class="ml-4 text-left">Creative Direction</p>
              </li>
              <li class="flex items-center">
                <svg class="h-6 w-6 flex-none fill-transparent stroke-white stroke-2" stroke-linecap="round"
                     stroke-linejoin="round">
                  <circle cx="12" cy="12" r="11"/>
                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none"/>
                </svg>
                <p class="ml-4 text-left">Artist Development</p>
              </li>
              <li class="flex items-center">
                <svg class="h-6 w-6 flex-none fill-transparent stroke-white stroke-2" stroke-linecap="round"
                     stroke-linejoin="round">
                  <circle cx="12" cy="12" r="11"/>
                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none"/>
                </svg>
                <p class="ml-4 text-left">Promotion & Record Deals</p>
              </li>
              <li class="flex items-center">
                <svg class="h-6 w-6 flex-none fill-transparent stroke-white stroke-2" stroke-linecap="round"
                     stroke-linejoin="round">
                  <circle cx="12" cy="12" r="11"/>
                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none"/>
                </svg>
                <p class="ml-4 text-left">Talent consultancy & <br> Bookings</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="execution bg-[rgba(235,235,235,0.2)] m-3 rounded">
          <div class=" text-white  p-5 methods planning ">
            <ul class="space-y-4">
              <li class="flex items-center">
                <span class="text-2xl">03</span>
                <h3 class="ml-2 uppercase font-bold text-2xl">
                  Executiion
                </h3>
              </li>
              <li class="flex items-center">
                <svg class="h-6 w-6 flex-none fill-transparent stroke-white stroke-2" stroke-linecap="round"
                     stroke-linejoin="round">
                  <circle cx="12" cy="12" r="11"/>
                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none"/>
                </svg>
                <p class="ml-4">
                  Brand Consultancy
                </p>
              </li>
              <li class="flex items-center">
                <svg class="h-6 w-6 flex-none fill-transparent stroke-white stroke-2" stroke-linecap="round"
                     stroke-linejoin="round">
                  <circle cx="12" cy="12" r="11"/>
                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none"/>
                </svg>
                <p class="ml-4">
                  360° Global Strategy
                </p>
              </li>
              <li class="flex items-center">
                <svg class="h-6 w-6 flex-none fill-transparent stroke-white stroke-2" stroke-linecap="round"
                     stroke-linejoin="round">
                  <circle cx="12" cy="12" r="11"/>
                  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none"/>
                </svg>
                <p class="ml-4 text-left">Support on artist <br> management</p>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div class="fixed  bottom-0 mb-1.5 pr-2 w-full text-white flex justify-end text-[rgba(255,255,255,0.3)]  ">
        <p class="footer-text uppercase text-4xl font-extralight">Methods</p>
      </div>
    </section>
  `,
  styles: ``,
  animations: [fadeInOut('4s')]

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
