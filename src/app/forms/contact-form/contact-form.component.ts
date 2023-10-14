import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputComponent} from '../../ui/input/input.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent],
  template: `
    <form [formGroup]="fg">
      <app-input type="email" formControlName="email"></app-input>
      <app-input type="text" formControlName="subject"></app-input>
      <app-input type="textarea" formControlName="content"></app-input>

      <button  [disabled]="fg.invalid" (click)="submit()" class="border font-bold py-2 px-4 rounded">
        Submit
      </button>
    </form>
  `,
  styles: []
})
export class ContactFormComponent {
  fb = inject(FormBuilder);
  fg = this.fb.group({
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    subject: ['', [Validators.required]],
    content: ['', [Validators.required]]
  })

  submit() {
    this.fg.valid && console.log(this.fg.getRawValue());
  }
}
