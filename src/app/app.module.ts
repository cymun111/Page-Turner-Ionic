import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TableOfContents } from '../pages/chapters/toc';
import { Chapter1 } from '../pages/chapters/chapter1';
import { Chapter2 } from '../pages/chapters/chapter2';
import { Chapter3 } from '../pages/chapters/chapter3';
import { Chapter4 } from '../pages/chapters/chapter4';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TableOfContents,
    Chapter1,
    Chapter2,
    Chapter3,
    Chapter4
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TableOfContents,
    Chapter1,
    Chapter2,
    Chapter3,
    Chapter4
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
