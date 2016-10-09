import {
    Injectable
} from '@angular/core';
import {
    Http
} from '@angular/http';

import {
    Platform    
} from 'ionic-angular';
import { Storage } from '@ionic/storage';

import {
    Observable
} from 'rxjs/Observable';


import 'rxjs/Rx';

import {
    Routine
} from '../models/routine';

import {
    Task
} from '../models/task';
import {
    GAException
} from '../models/gaException';
import {
    GAService
} from '../services/googleAnalyticsService';

@Injectable()
export class DataService {
    storage: Storage;

    private DB_NAME: string = 'kidsFirstThen.db';
    private ROUTINES_KEY: string = 'routines';

    Routines: Routine[] = [];

    constructor(
        private http: Http,
        private platform: Platform,
        private gaService: GAService
    ) {
        this.platform.ready().then(() => {
           
        });
    }


    updateKids(): Promise<any> {
        let oRoutines: any;
        return new Promise((resolve, reject) => {
            if (typeof this.Routines === 'undefined') {
                this.Routines = [];

            }

            this.saveData(this.Routines, this.ROUTINES_KEY);
            resolve('Done');

        }).catch((error) => {
            this.logError(error);
            // reject('Only available on a device');
        });
    }

    private logError(data: any) {
        let oGAException: GAException;
        oGAException = {
            description: data,
            isFatal: false

        };
        this.gaService.trackException(oGAException);

    }

    addTask(data: Task): Promise<any> {
        let oRoutines: any;
        return new Promise((resolve, reject) => {
            if (typeof this.Routines === 'undefined') {
                this.Routines = [];

            }

            resolve('Done');

        }).catch((error) => {
            // reject('Only available on a device');
        });
    }

    deleteKid(data: Routine): Promise<any> {

        return new Promise((resolve, reject) => {
            if (typeof this.Routines === 'undefined') {
                this.Routines = [];

            }
            let index = this.Routines.indexOf(data);

            if (index > -1) {
                this.Routines.splice(index, 1);
            }




            this.saveData(this.Routines, this.ROUTINES_KEY);
            resolve('Done');

        }).catch((error) => {
            // reject('Only available on a device');
        });
    }


    addKid(data: Routine): Promise<any> {
        let oRoutines: any;
        return new Promise((resolve, reject) => {
            if (typeof this.Routines === 'undefined') {
                this.Routines = [];

            }
            this.Routines.push(data);
            this.saveData(this.Routines, this.ROUTINES_KEY);
            resolve('Done');

        }).catch((error) => {
            // reject('Only available on a device');
        });
    }

    getKids(): Promise<Routine[]> {
        let oRoutines: any;
        return new Promise(resolve => {
            if (typeof (this.storage) !== 'undefined') {
                this.storage.get(this.ROUTINES_KEY).then((value) => {
                    if (value) {
                        console.log(value);
                        this.Routines = JSON.parse(value);
                        // this.Kids = oKids;

                        resolve(this.Routines);
                    }
                });

            }
        });
    }

    getTokenTypes(): string[] {
        let tokenTypes: any = ['images/star.png',
            'images/face.png',
            'images/giraffe.png',
            'images/leopard.png',
            'images/monkey.png',
            'images/monkeytoy.png',
            'images/rocket.png',
            'images/Sheep.png',
            'images/teddybear.png',
            'images/train.png',
            'images/triceratops.png',
        ];
        return tokenTypes;

    }


    private saveData(data: any, key: string) {
        if (data) {
            let newData = JSON.stringify(data);
            this.storage.set(key, newData);
        } else {
            this.storage.remove(key);
        }
    }
}