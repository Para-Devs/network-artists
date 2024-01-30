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
          <h1 class="text-center mt-10 md:mt-20 lg:mt-32 leading-[37px] md:leading-[100px] text-white uppercase text-[50px] md:text-[130px]">
              Curious<br>to know more?</h1>

        <!-- Container for the Team -->
        <div class="flex flex-wrap justify-center text-center">
          <!-- First  -->
          <div class="person text-white m-5 bg-[rgba(235,235,235,0.2)] pt-5 px-5 pb-8 rounded">
            <div class="mb-6 flex justify-center">
              <img
                src="../../../assets/img/phil_profil.jpeg"
                class="w-32 rounded-full shadow-lg dark:shadow-black/30" />
            </div>
            <h5 class="name mb-4 text-xl font-semibold">PhilippStraub</h5>
            <p class="mb-4">
              <a href="mailto:ps@network-artists.com"
                 class="email text-center mt-10 min-w-[200px] md:p-10 p-5 md:mt-20 mx-5 text-white ">
                ps&#64;network-artists.com</a>
            </p>
            <div class="arrow-container">
              <span class="arrow"></span>
            </div>
          </div>

          <!-- Second -->
          <div class="person text-white m-5 bg-[rgba(235,235,235,0.2)] drop-shadow p-5 rounded">
            <div class="mb-6 flex justify-center ">
              <img
                src="../../../assets/img/andrew_profil.png"
                class="w-32 rounded-full shadow-lg dark:shadow-black/30" />
            </div>
            <h5 class="name mb-4 text-xl font-semibold">Andrew van Ginneken</h5>
            <p class="mb-4">
              <a href="mailto:avg@network-artists.com"
                 class="email text-center mt-20  min-w-[200px] md:p-10 p-5 md:mt-10 mx-5 text-white ">
                avg&#64;network-artists.com</a>
            </p>

            <div class="arrow-container">
              <span class="arrow"></span>

            </div>
          </div>
        </div>
      </section>
  `,
  styles: [`

    .arrow-container {
      position: relative;
    }

    span.arrow {
      width: 2vmin;
      height: 2vmin;
      box-sizing: border-box;
      position: absolute;
      left: 45%;
      top: 50%;
      transform: rotate(-225deg);

      &::before {
        content: '';
        width: 100%;
        height: 100%;
        border-width: .2vmin .2vmin 0 0;
        border-style: solid;
        border-color: #fafafa;
        transition: .2s ease;
        display: block;
        transform-origin: 100% 0;
      }


      &:after {
        content: '';
        float: left;
        position: relative;
        top: -100%;
        width: 100%;
        height: 100%;
        border-width: 0 .2vmin 0 0;
        border-style: solid;
        border-color: #fafafa;
        transform-origin: 100% 0;
        transition: .2s ease-in-out;
      }

      &:hover::after {
        transform: rotate(45deg);
        border-color: #ffffff;
        height: 120%;
      }

      &:hover::before {
        border-color: #ffffff;
        transform: scale(.8);

      }

    }

    .person {
      transition: all ease 1000ms;

      img {
        transition: all ease 500ms;
      }

      .email {
        transition: all ease 400ms;
      }

      .name {
        transition: all ease 200ms;
      }

      &:hover {
        transform: scale(105%);
        filter: drop-shadow(0 0 0.80rem rgba(255, 255, 255, 0.4));

        img {
          transform: scale(105%);
        }

        .email {
          text-shadow: 1px 1px 2px transparent, 0 0 1em transparent, 0 0 0.2em rgba(255, 255, 255, 0.4);
        }

        .name {
          text-shadow: 1px 1px 2px transparent, 0 0 1em transparent, 0 0 0.2em rgba(255, 255, 255, 0.4);
        }
      }
    }
  `],
  animations: [fadeInOut('4s')]
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
