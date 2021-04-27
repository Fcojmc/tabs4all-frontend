import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../auth/interfaces/user';

@Pipe({
  name: 'userImages'
})
export class UserImagesPipe implements PipeTransform {

  transform(payload: User): string {
    const baseUrl = environment.baseUrlImage;
    
    if (!payload.image) {
      return 'assets/no-image.png';
    }

    return `${baseUrl}/storage/user-images/${payload.image}`;
  }

}
