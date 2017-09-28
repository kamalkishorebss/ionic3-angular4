import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustdetailPage } from './custdetail';

@NgModule({
  declarations: [
    CustdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CustdetailPage),
  ],
})
export class CustdetailPageModule {}
