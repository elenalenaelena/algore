import { Pipe, PipeTransform } from '@angular/core';
/*
 * Map numeric values to textual decriptions whereby: 
 * (number < 60) = "unsicher" // (60 <= number < 90) = "sicher" // (number >= 90) ="sehr sicher"
 * Usage:
 *   value | numberToText
 * Example:
 *   {{ number|  numberToText }}
 *   formats to: text
*/
@Pipe({name: 'numberToText'})
export class NumberToTextPipe implements PipeTransform {
  transform(val: number): string {      
    if(val < 60)
     return "unsicher";
    else if (val >= 90)
      return "sehr sicher"
    else 
      return "sicher";
  }
}