import { Pipe, PipeTransform } from '@angular/core';
/*
 * Map percentage value to the domain [0, 5]
 * Usage:
 *   value | trimString
 * Example:
 *   {{ name (explanation)|  trimString }}
 *   formats to: name
*/
@Pipe({name: 'trimString'})
export class TrimStringPipe implements PipeTransform {
  transform(value: string): any {  
    
    let reg = /\s*\([^)]+\)/g;

    return value.replace(reg, '');
  }
}