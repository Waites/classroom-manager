import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TableView } from './table-view';

@NgModule({
  declarations: [
    TableView,
  ],
  imports: [
    IonicPageModule.forChild(TableView),
  ],
  exports: [
    TableView
  ]
})
export class TableViewModule {}
