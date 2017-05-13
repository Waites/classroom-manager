import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeatChart } from './seat-chart';

@NgModule({
  declarations: [
    SeatChart,
  ],
  imports: [
    IonicPageModule.forChild(SeatChart),
  ],
  exports: [
    SeatChart
  ]
})
export class SeatChartModule {}
