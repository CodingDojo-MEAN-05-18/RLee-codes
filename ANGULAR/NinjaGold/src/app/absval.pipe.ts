import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'absval'
})

export class AbsValPipe implements PipeTransform {
  transform(value: number) {
    console.log("value", value);
    if (typeof value !== 'number') {
      return value;
    }
    return Math.abs(value);
  }
}
