import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'working'
})
export class WorkingPipe implements PipeTransform {

  transform(value: number): string {
    if (value>=1000000000) {
      value = (value - value % 1000000000)/1000000000
      return value.toString()+"B"
    } else if (value >=1000000) {
      value = (value - value % 1000000)/1000000
      return value.toString()+"M"
    } else if (value >=1000) {
      value = (value - value % 1000)/1000
      return value.toString()+"K"
    }
    return value.toString()
  }
}
