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
    </div>
    <section class="w-full h-full flex justify-center items-center">
      <div  class="logo" [innerHtml]="svgContent"></div>
    </section>
  `,
  styles: [`
  `],
  animations: [fadeInOut('2s')]
})
export class HomeComponent {
  svgContent: SafeResourceUrl | undefined;

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
        });

  }
}
