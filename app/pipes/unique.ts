import { Pipe, PipeTransform } from 'angular2/core';
import * as _ from 'lodash';

@Pipe({
  name: 'unique'
})

export class UniquePipe implements PipeTransform {
  transform(value: any, args: any[]) : any {
    let propertyName = args[0];
    
    if(!!propertyName) {
      return _.uniqBy(value, propertyName);
    }
    
    return _.uniq(value);
  }
}
