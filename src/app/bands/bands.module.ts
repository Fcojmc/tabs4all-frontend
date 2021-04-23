import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { BandViewComponent } from './pages/band-view/band-view.component';
import { CreateBandComponent } from './pages/create-band/create-band.component';
import { BandsRoutingModule } from './bands-routing.module';



@NgModule({
  declarations: [
    ListComponent,
    BandViewComponent,
    CreateBandComponent
  ],
  imports: [
    CommonModule,
    BandsRoutingModule
  ]
})
export class BandsModule { }
