import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chapter4 } from './chapter4';
import { HomePage } from '../home/home'

@Component({
  templateUrl: 'chapter3.html'
})
export class Chapter3 {

  constructor(public navCtrl: NavController) {}

  push() {
    this.navCtrl.push(Chapter4);
  }

  pop() {

    this.navCtrl.pop();
  }

  gotoHome() {
    
    this.navCtrl.push(HomePage);
  
}
}