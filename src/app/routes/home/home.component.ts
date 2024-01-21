import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="w-full h-full flex justify-center items-center">
      <div class="logo scale-75" [innerHtml]="svgContent"></div>
    </section>
  `,
  styles: [`
  `]
})
export class HomeComponent {
  svgContent: SafeResourceUrl | undefined;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

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
