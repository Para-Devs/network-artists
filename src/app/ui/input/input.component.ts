import {AfterViewInit, Component, Input, OnDestroy, Optional, Self} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule} from '@angular/forms';
import {Subject, takeUntil} from 'rxjs';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  template: `
      <div class="">
          <label
                  for="{{title}}"
                  class="block mb-2 text-sm font-medium text-gray-900"
          >{{ title | translate }}</label
          >
          <div class="mt-2">
              <div class="flex">
                  <input *ngIf="type !== 'textarea'"
                         type="{{type}}"
                         [formControl]="control"
                         name="{{title}}"
                         id="{{title}}"
                         [class.!border-red-600]="this._control.errors && !this._control.pristine"
                         class="border-2 bg-gray-50  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                         [placeholder]="placeholder"
                  />
                  <textarea *ngIf="type === 'textarea'"
                            [formControl]="control"
                            name="{{title}}"
                            id="{{title}}"
                            [class.!border-red-600]="this._control.errors && !this._control.pristine"
                            class="border-2 bg-gray-50  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            [placeholder]="placeholder"
                  ></textarea>
                  <ng-content></ng-content>
              </div>
              <ng-container *ngIf="this._control.errors && !this._control.pristine">
          <span
                  class="text-rose-500 text-xs"
                  *ngFor="let error of keys(_control.errors ?? {})"
          >{{ getErrorMessage(error) | translate }}<br/>
          </span>
              </ng-container>
          </div>
      </div>
  `,
  styles: [
  ]
})
export class InputComponent implements AfterViewInit, ControlValueAccessor, OnDestroy {
  onDestroy$: Subject<void> = new Subject<void>();
  keys = Object.keys;
  public control = new FormControl();

  @Input() placeholder?:string = '';
  @Input() title = '';
  @Input() type: 'text' | 'password' |'email' | 'textarea' = 'text';
  constructor(@Self() @Optional() public _control: NgControl) {
    this._control.valueAccessor = this;
  }

  ngAfterViewInit() {
    this.control.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe((x) => {
      this.onChangeFn(x);
    });
  }

  writeValue(value: number): void {
    this.control.setValue(value);
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChangeFn = fn;
  }

  getErrorMessage(validationType: string) {
    return validationType;
  }

  registerOnTouched = (fn: any) => {
    console.log('Register on touch');
  };

  onChangeFn = (_: any): void => {
    console.log('Register on change');
  };
  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
