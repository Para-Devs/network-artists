import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-method',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="w-full h-full flex  items-center flex-row">
      <div class="w-1/3"><p>One</p></div>
      <div class="w-1/3"><p>Two</p></div>
      <div class="w-1/3"><p>Three</p></div>
    </section>
  `,
  styles: ``
})
export class MethodComponent {

}
