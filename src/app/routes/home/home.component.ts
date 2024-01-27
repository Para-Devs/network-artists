import {Component, ElementRef, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";
import {fadeInOut} from '../../animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [@fadeInOut]="true" class="w-full flex justify-center items-center">
    <p class="leftText" [class.opacity-100]="leftCircleActive" [class.opacity-0]="!leftCircleActive" class=" mt-20 transition-all ease-in-out  absolute text-white">Hallo</p>
    </div>
    <section class="w-full h-full flex justify-center items-center">
      <div #svgContainer class="logo scale-75" [innerHtml]="svgContent"></div>
    </section>
  `,
  styles: [`
  `],
  animations: [fadeInOut('2s')]
})
export class HomeComponent {
  svgContent: SafeResourceUrl | undefined;
  myCircleLeft!: NodeListOf<Element>;
  leftCircleActive = false;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }
  @ViewChild('svgContainer') svgContainer!: ElementRef;
  ngOnInit() {
    this.http.get('assets/img/Network_Artist_Logo_white.svg', { responseType: 'text' })
      .subscribe(data => {
        let parser = new DOMParser();
        let svgDoc = parser.parseFromString(data, "image/svg+xml");

        let myCircleLeft = svgDoc.querySelectorAll(".myCircle");
        myCircleLeft.forEach(circle => {
          circle.setAttribute('onclick', `window.location='http://orf.at'`);
        });
        this.myCircleLeft = myCircleLeft;

        let myCircleTop = svgDoc.querySelectorAll(".myCircleTop");
        myCircleTop.forEach(circle => {
          circle.setAttribute('onclick', `window.location='http://derstandard.at'`);
        });

        let myCircleRight = svgDoc.querySelectorAll(".myCircleRight");
        myCircleRight.forEach(circle => {
          circle.setAttribute('onclick', `window.location='http://medium.com'`);
        });

        let serializer = new XMLSerializer();
        let modifiedSvgStr = serializer.serializeToString(svgDoc.documentElement);
        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(modifiedSvgStr);
        // this.fixPosition('leftText', myCircleLeft, 20,20);
        // this.fixPosition('rightText', myCircleRight, 90, 20, false);
        });
    setTimeout(() => {
      const svg = (this.svgContainer.nativeElement as HTMLDivElement).querySelector('svg') as SVGElement;
      this.handleCicrcleHover('.myCircleLeft', svg, () =>  (this.leftCircleActive = true),() => (this.leftCircleActive = false));
    },500)
  }

  handleCicrcleHover(circleSelector: string, svg: SVGElement, enter: () => void, leave: () => void) {
    svg.querySelector(circleSelector)?.addEventListener('mouseenter', (ev: Event) => {
      console.log('enter');
      enter();
    })
    svg.querySelector(circleSelector)?.addEventListener('mouseout', (ev: Event) => {
      console.log('leave');
      leave();
    })
  }

  fixPosition(textElement: string, circle: NodeListOf<Element>, fixX = 0,fixY = 0, add = false) {

    setTimeout(() => {
      const el: HTMLParagraphElement = document.getElementById(textElement) as HTMLParagraphElement;
      const logo: HTMLDivElement = document.getElementById('logo') as HTMLDivElement;
      const x: string = circle[0].getAttribute('cx') as string;
      const y: string = circle[0].getAttribute('cy') as string;
      const {x: x2, y: y2} = logo.getBoundingClientRect();
      if(add) {
        el.style.top = `${parseInt(y)}px`;
        el.style.left = `${parseInt(x)}px`;
      } else {
        el.style.left = `${parseInt(x)}px`;
        el.style.top = `${parseInt(y)}px`;

      }

    },100);
  }
}
