import { Component } from '@angular/core';

import { NavController,ModalController } from 'ionic-angular';
import {
  DataService
} from '../../services/data';
import {
  GAService
} from '../../services/googleAnalyticsService';
import {
  AddRoutineModal
} from './add-routine-modal';

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

addNewRoutine(): void {
    let modal = this.modalController.create(AddRoutineModal);
    modal.onDidDismiss(data => {
      this.dataService.getKids()
        .then((response) => {

          //this.kids = response;

        });
    });

    modal.present();

  }


}
