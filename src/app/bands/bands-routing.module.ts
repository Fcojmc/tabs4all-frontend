import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { CreateBandComponent } from './pages/create-band/create-band.component';
import { BandViewComponent } from './pages/band-view/band-view.component';
import { BandEditComponent } from './pages/band-edit/band-edit.component';
import { AdminGuard } from '../guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'list', component: ListComponent},
      { path: 'create', component: CreateBandComponent, canActivate: [AdminGuard], canLoad: [AdminGuard] },
      { path: 'edit', component: BandEditComponent, canActivate: [AdminGuard], canLoad: [AdminGuard] },
      { path: ':name', component: BandViewComponent },
      { path: '**', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BandsRoutingModule { }
