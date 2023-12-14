import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): unknown {
    if(value.length === 0) {
      return value
    }
    let chars = value.split('');
    chars.reverse();
    let newStr = chars.join('');
    return newStr;
  }

}
