import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalesOrderPage } from './sales-order';

@NgModule({
  declarations: [
    SalesOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(SalesOrderPage),
  ],
})
export class SalesOrderPageModule {}
