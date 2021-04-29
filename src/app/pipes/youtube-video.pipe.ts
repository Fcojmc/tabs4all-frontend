import { Pipe, PipeTransform } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Band } from '../interfaces/band.interface';
import { Tab } from '../interfaces/tab.interface';

@Pipe({
  name: 'youtubeVideo'
})
export class YoutubeVideoPipe implements PipeTransform {

  private safeUrl!: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer) { }

  transform(payload: Band | Tab): SafeResourceUrl {

    payload.url_yt = payload.url_yt.substr(32, (payload.url_yt.length - 32));
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${payload.url_yt}`);
    
    return this.safeUrl;
  }

}
