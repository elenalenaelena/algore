import { Pipe, PipeTransform } from '@angular/core';
/*
 * Map percentage value to the domain [0, 5]
 * Usage:
 *   value | normalizeToDomain_0_5
 * Example:
 *   {{ 73 |  normalizeToDomain_0_5 }}
 *   formats to: 4
*/
@Pipe({name: 'normalizeToDomain_0_5'})
export class NormalizeToDomainPipe implements PipeTransform {
  transform(value: number): number {
    return Math.ceil(value / 20);
  }
}