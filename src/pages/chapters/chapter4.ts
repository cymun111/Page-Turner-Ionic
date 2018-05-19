import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home'


@Component({
  templateUrl: 'chapter4.html'
})
export class Chapter4 {

  constructor(public navCtrl: NavController) {}

  

  pop() {

    this.navCtrl.pop();
  }

  gotoHome() {
    
    this.navCtrl.push(HomePage);
  
}
}