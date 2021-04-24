import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({
  name: 'reletiveTime'
})
export class ReletiveTimePipe implements PipeTransform {

  transform(value: string): string {
    return moment(value).fromNow();
  }
}
