import { Pipe, PipeTransform } from '@angular/core';
/*
 * Extract a substring between round parantheses
 * Usage:
 *   value | extractString
 * Example:
 *   {{ name (explanation)|  extractString }}
 *   formats to: name
*/
@Pipe({name: 'extractString'})
export class ExtractStringPipe implements PipeTransform {
  transform(s: string): any {      
    return s.substring(
      s.lastIndexOf("(") + 1, 
      s.lastIndexOf(")")
    );
  }
}