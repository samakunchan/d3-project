import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clear',
})
export class ClearPipe implements PipeTransform {
  transform(value: { links: any[]; nodes: any[] }, ...args: unknown[]): unknown {
    value.links.map((link) => {
      delete link.source.x;
      delete link.source.y;
      delete link.source.vy;
      delete link.source.vx;
    });
    return value;
  }
}
