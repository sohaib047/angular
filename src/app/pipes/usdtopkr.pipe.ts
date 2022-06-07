import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdtopkr'
})
export class UsdtopkrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    const [x] = args;

    return value*x;
  }

}
