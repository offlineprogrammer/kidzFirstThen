import { Component } from '@angular/core';

import { NavController,ModalController } from 'ionic-angular';
import {
  DataService
} from '../../services/data';
import {
  GAService
} from '../../services/googleAnalyticsService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private dataService: DataService,
     private gaService: GAService,
     private modalController: ModalController) {

  }

}
