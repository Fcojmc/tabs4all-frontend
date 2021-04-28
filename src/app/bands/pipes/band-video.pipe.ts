import { Pipe, PipeTransform } from '@angular/core';
import { Band } from '../interfaces/band.interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'bandVideo'
})
export class BandVideoPipe implements PipeTransform {

  private safeUrl!: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer) { }

  transform(payload: Band): SafeResourceUrl {

    payload.url_yt = payload.url_yt.substr(32, (payload.url_yt.length - 32));
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${payload.url_yt}`);
    
    return this.safeUrl;
  }

}
