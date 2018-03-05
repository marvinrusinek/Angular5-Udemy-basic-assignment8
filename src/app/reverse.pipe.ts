import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: true
})
export class ReversePipe implements PipeTransform {
  transform(value: any): any {
    const castValToStr = <string>value;
    return castValToStr
                  .split('')
                      .reverse()
                          .join('');
  }
}
