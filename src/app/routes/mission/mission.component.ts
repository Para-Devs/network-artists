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

<!--        play with circle animation -->
        <div class="main">
          <div class="circle"></div>
        </div>
      </section>
  `,
  styles: [`

    .main {
      -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
      filter: blur(2px);
      width: 330px;
      height: 330px;
      border: 1px solid rgba(255, 255, 255, 0.30);
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      border-radius: 50%;
    }

    .circle {
      -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
      filter: blur(5px);
      width: 30px;
      height: 30px;
      background: rgba(255, 255, 255, 0.30);
      border-radius: 50%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
      margin: auto;
      animation: circle 8s linear infinite;

    }

    @keyframes circle {
      0% {
        transform: rotate(0deg) translate(-165px) rotate(0deg);

      }
      100% {
        transform: rotate(360deg) translate(-165px) rotate(-360deg);
      }
    }


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
