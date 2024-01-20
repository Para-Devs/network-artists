import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [CommonModule],
  template: `
      <section class="w-full h-full flex  items-center flex-col">
          <div class="mx-40">
              <h1 class="text-center mt-40 leading-[100px] text-white uppercase text-[130px]">Our mission<br>Is to
                  connect</h1>
              <h1 class="text-center mt-20 leading-[90px] p-10 text-white uppercase text-[130px] border-2 border-white">
                  The dots.</h1>
          </div>
      </section>
  `,
  styles: ``
})
export class MissionComponent {

}
