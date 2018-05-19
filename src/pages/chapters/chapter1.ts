import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chapter2 } from './chapter2';
import { HomePage } from '../home/home'

@Component({
  templateUrl: 'chapter1.html'
})
export class Chapter1 {

  constructor(public navCtrl: NavController) {}

  push() {
    this.navCtrl.push(Chapter2);
  }

  pop() {

    this.navCtrl.pop();
  }

  gotoHome() {
    
    this.navCtrl.push(HomePage);
  
}
}