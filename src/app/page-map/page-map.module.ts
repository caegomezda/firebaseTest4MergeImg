import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageMapPageRoutingModule } from './page-map-routing.module';

import { PageMapPage } from './page-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageMapPageRoutingModule
  ],
  declarations: [PageMapPage]
})
export class PageMapPageModule {}
