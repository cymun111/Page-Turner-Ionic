import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TableOfContents } from '../chapters/toc';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  push(){
    this.navCtrl.push(TableOfContents)
  }
}
