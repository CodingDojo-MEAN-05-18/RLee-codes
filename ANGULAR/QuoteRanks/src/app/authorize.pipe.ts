import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authorize'
})

export class AuthorizePipe implements PipeTransform {
  transform(value: string) {
    console.log('value', value);
    if (typeof value !== 'string') {
      return value;
    }
    return value.replace(/\w+/g, (auth) => {
      console.log(auth);
      // splitting off first character was unnecessary to achieve assigned format, but was done anyway for practice.
      return ("- "+auth[0]+auth.substr(1).toUpperCase());
    });
  }
}
// /^".*"$/
