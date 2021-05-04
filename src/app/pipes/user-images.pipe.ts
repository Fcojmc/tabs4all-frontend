import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.interface';

@Pipe({
  name: 'userImages'
})
export class UserImagesPipe implements PipeTransform {

  transform(payload: User): string {
    const baseUrl = environment.baseUrlImage;
    
    if (!payload.image) {
      return 'assets/images/no-image.png';
    }

    return `${baseUrl}/user-images/${payload.image}`;
  }

}
