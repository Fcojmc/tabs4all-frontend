import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Band } from '../interfaces/band.interface';

@Pipe({
  name: 'bandImage'
})
export class BandImagePipe implements PipeTransform {

  transform(payload: Band): string {
    const baseUrl = environment.baseUrlImage;
    
    /* if (!payload.image) {
      return 'assets/no-image.png';
    } */

    return `${baseUrl}/band-images/${payload.image}`;
  }
}
