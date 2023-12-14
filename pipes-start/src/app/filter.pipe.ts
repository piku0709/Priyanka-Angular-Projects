import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false //pure as 'false' (impure pipe) will run this filter whenever data or anything changes on the template, 
              // not a good practice since this will have bad impact on performance, by default it is true
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterStr: string, propName: string): any[] {
    if(value.length === 0) {
      return value;
    }

    if(filterStr.length === 0) {
      return value;
    }
    //console.log(value, filterStr, propName)
    let resultArray = [];
    for(const item of value) {
      if(item[propName] === filterStr) {
        resultArray.push(item)
      }
    }
    //console.log(resultArray)
    return resultArray;
  }

}
