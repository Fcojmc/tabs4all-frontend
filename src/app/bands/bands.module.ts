import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './pages/list/list.component';
import { BandViewComponent } from './pages/band-view/band-view.component';
import { CreateBandComponent } from './pages/create-band/create-band.component';
import { BandsRoutingModule } from './bands-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { BandEditComponent } from './pages/band-edit/band-edit.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListComponent,
    BandViewComponent,
    CreateBandComponent,
    BandEditComponent
  ],
  imports: [
    CommonModule,
    BandsRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class BandsModule { }
