import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chapter1 } from './chapter1';
import { Chapter2 } from './chapter2';
import { Chapter3 } from './chapter3';
import { Chapter4 } from './chapter4';
import { HomePage } from '../home/home'


@Component({
  templateUrl: 'toc.html'
})
export class TableOfContents {

  constructor(public navCtrl: NavController) {}

  push() {
    this.navCtrl.push(Chapter1);
  }

  pop() {

    this.navCtrl.pop();
  }

  gotoHome() {
    
    this.navCtrl.push(HomePage);
  
}

  gotoChap1() {
    
      this.navCtrl.push(Chapter1);
    
  }
  gotoChap2() {
    
    this.navCtrl.push(Chapter2);
  }
  
  gotoChap3() {
    
    this.navCtrl.push(Chapter3);
    
  }
  gotoChap4() {
    
    this.navCtrl.push(Chapter4);
  
}
}