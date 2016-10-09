import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { KidzFirstThen } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DataService } from '../services/data';
import { GAService } from '../services/googleAnalyticsService';

@NgModule({
  declarations: [
    KidzFirstThen,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(KidzFirstThen)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    KidzFirstThen,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [ Storage,DataService,GAService ]
})
export class AppModule {}
