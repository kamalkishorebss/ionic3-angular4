import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PorderPage } from './porder';

@NgModule({
  declarations: [
    PorderPage,
  ],
  imports: [
    IonicPageModule.forChild(PorderPage),
  ],
})
export class PorderPageModule {}
