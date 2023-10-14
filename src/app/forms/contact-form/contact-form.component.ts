import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputComponent} from '../../ui/input/input.component';
import {patternValidator} from '../../utils/validators';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent],
  template: `
      <form [formGroup]="fg" class="w-full p-10">

          <div class="grid md:grid-cols-2 gap-2 grid-cols-1 pb-2">
              <app-input type="email" title="fields.email" formControlName="email"></app-input>
              <app-input type="text" title="fields.subject" formControlName="subject"></app-input>
          </div>
        <app-input type="textarea" title="fields.content" formControlName="content"></app-input>
          <button [disabled]="fg.invalid" (click)="submit()" class="mt-2 border font-bold py-2 px-4 rounded">
              Submit
          </button>
      </form>
  `,
  styles: []
})
export class ContactFormComponent {
  fb = inject(FormBuilder);
  fg = this.fb.group({
    email: ['', [Validators.required, patternValidator({
      pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/g, message: 'invalid_email'
    })]],
    subject: ['', [Validators.required]],
    content: ['', [Validators.required]]
  })

  submit() {
    this.fg.valid && console.log(this.fg.getRawValue());
  }
}
