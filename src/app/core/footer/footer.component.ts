import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
      <div class="fixed bottom-0 pr-2 w-full text-white flex justify-end ">
        <p>Network Artists</p>
      </div>
  `,
  styles: ``
})
export class FooterComponent {

}
