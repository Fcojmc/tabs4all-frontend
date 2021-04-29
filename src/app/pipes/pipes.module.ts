import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeVideoPipe } from './youtube-video.pipe';
import { UserImagesPipe } from './user-images.pipe';
import { BandImagePipe } from './band-image.pipe';


@NgModule({
  declarations: [
    BandImagePipe,
    YoutubeVideoPipe,
    UserImagesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BandImagePipe,
    YoutubeVideoPipe,
    UserImagesPipe
  ]
})
export class PipesModule { }
