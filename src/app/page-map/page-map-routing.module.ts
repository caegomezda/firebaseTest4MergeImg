import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageMapPage } from './page-map.page';

const routes: Routes = [
  {
    path: '',
    component: PageMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageMapPageRoutingModule {}
