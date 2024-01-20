import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      service works!
    </p>
  `,
  styles: ``
})
export class ServiceComponent {

}
