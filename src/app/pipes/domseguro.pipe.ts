import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser'; 

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private _domSanitizer:DomSanitizer){ }

  // transform(value: string): any{
  //   return this._domSanitizer.bypassSecurityTrustResourceUrl(value);
  // }
  transform(value: string): any {
  	const url = 'https://open.spotify.com/embed/track/';
    return this._domSanitizer.bypassSecurityTrustResourceUrl(url + value.slice(14));
  }
}
