import {FormControl, ValidatorFn} from '@angular/forms';

export function patternValidator(config: {message: string; pattern:  RegExp}): ValidatorFn {
  return ((control: FormControl) => {
    let urlRegEx: RegExp = config.pattern;
    if (control.value && !control.value.match(urlRegEx)) {
      return {
        [config.message] : config.message
      };
    } else {
      return null;
    }
  }) as ValidatorFn;
}
