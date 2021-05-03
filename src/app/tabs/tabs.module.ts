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
import { TabCardComponent } from './components/tab-card/tab-card.component';
import { PipesModule } from '../pipes/pipes.module';
import { DialogComponent } from './components/dialog/dialog.component';



@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    TabViewComponent,
    EditComponent,
    TabCardComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    TabsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    PipesModule
  ]
})
export class TabsModule { }
