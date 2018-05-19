import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chapter3 } from './chapter3';
import { HomePage } from '../home/home'

@Component({
  templateUrl: 'chapter2.html'
})
export class Chapter2 {

  constructor(public navCtrl: NavController) {}

  push() {
    this.navCtrl.push(Chapter3);
  }

  pop() {

    this.navCtrl.pop();
  }

  gotoHome() {
    
    this.navCtrl.push(HomePage);
  
}
}