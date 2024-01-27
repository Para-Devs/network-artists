import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `

<!--     todo: icons footer ? oder text ? -->
<!--      <div class="fixed bottom-0 pr-2 w-full text-white flex justify-end ">-->
<!--        <p  class="">Network Artists</p>-->
<!--      </div>-->
  `,
  styles: `
  `
})
export class FooterComponent {

}
/*
import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';
import {fadeInOut} from '../../animations';

@Component({
  selector: 'app-method',
  standalone: true,
  imports: [CommonModule],
  template: `
      <section [@fadeInOut]="true" class="w-full h-full flex  justify-center items-center flex-row">
          <div class="md:flex w-[50%] relative h-[60%] rounded-full border-2 border-white hidden  justify-center items-center flex-row  ">
              <!--<div class="w-1/3"><p>One</p></div>
              <div class="w-1/3"><p>Two</p></div>
              <div class="w-1/3"><p>Three</p></div>!-->
              <img class="w-[60%] h-[60%] z-50" src="../../../assets/img/Network_Artist_Logo_white.svg" alt="logo">
              <div class="planning text-white absolute top-[-40px] bg-[#002B4F] pl-10 pr-10 text-center ">
                  <h1>01.<b class="uppercase">Planning</b></h1>
                  <p>Brand consultancy</p>
                  <p>360 Global Strategy</p>
                  <p>Support on artist management</p>
              </div>
              <div class="planning text-white absolute right-[-170px] bg-[#002B4F] px-10 py-10 text-center ">
                  <h1>01.<b class="uppercase">Execution</b></h1>
                  <p>In-house creative team</p>
                  <p>In house production team</p>
                  <p>Publishing and marketing</p>
              </div>
            <div class="planning text-white absolute left-[-40px] bottom-[20px] bg-[#002B4F] py-10 text-center ">
              <h1>01.<b class="uppercase">Execution</b></h1>
              <p>In-house creative team</p>
              <p>In house production team</p>
              <p>Publishing and marketing</p>
            </div>
          </div>
      </section>
  `,
  styles: ``,

  animations: [fadeInOut('2s')]
})
export class MethodComponent implements OnInit,OnDestroy{
  doc = inject(DOCUMENT);
  ngOnInit() {
    this.doc.body.classList.add("method");
  }
  ngOnDestroy() {
    this.doc.body.classList.remove("method");

  }
}

 */
