import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './pages/list/list.component';
import { BandViewComponent } from './pages/band-view/band-view.component';
import { CreateBandComponent } from './pages/create-band/create-band.component';
import { BandsRoutingModule } from './bands-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { BandEditComponent } from './pages/band-edit/band-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BandCardComponent } from './components/band-card/band-card.component';
import { BandImagePipe } from './pipes/band-image.pipe';
import { BandVideoPipe } from './pipes/band-video.pipe';



@NgModule({
  declarations: [
    ListComponent,
    BandViewComponent,
    CreateBandComponent,
    BandEditComponent,
    BandCardComponent,
    BandImagePipe,
    BandVideoPipe
  ],
  imports: [
    CommonModule,
    BandsRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BandsModule { }
