import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { CreateComponent } from './pages/create/create.component';
import { TabViewComponent } from './pages/tab-view/tab-view.component';
import { TabsRoutingModule } from './tabs-routing.module';
import { EditComponent } from './pages/edit/edit.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    TabViewComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    TabsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class TabsModule { }
