import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TableView } from '../table-view/table-view';
import { SeatChart } from '../seat-chart/seat-chart';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateToTableView(): void {
   this.navCtrl.push(TableView);
  }
  navigateToSeatChart(): void {
   this.navCtrl.push(SeatChart);
  }

}
