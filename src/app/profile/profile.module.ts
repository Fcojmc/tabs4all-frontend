import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './components/card/card.component';
import { MyTabsComponent } from './components/my-tabs/my-tabs.component';
import { FavBandsComponent } from './components/fav-bands/fav-bands.component';
import { FavTabsComponent } from './components/fav-tabs/fav-tabs.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent,
    MyTabsComponent,
    FavBandsComponent,
    FavTabsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    PipesModule
  ]
})
export class ProfileModule { }
