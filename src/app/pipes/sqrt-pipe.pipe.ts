import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrtPipe'
})
export class SqrtPipePipe implements PipeTransform {

  transform(value: number): any {
    return Math.sqrt(value);
  }

}
