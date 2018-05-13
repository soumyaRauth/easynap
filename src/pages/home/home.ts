import { Component, OnInit,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  @ViewChild('setCursor') cursorSet ;
  constructor(public navCtrl: NavController) {
    
  }

  /**sets the cursor to the input after 150 ms after the app opens */
  ngOnInit() {
    setTimeout(() => {
      this.cursorSet.setFocus();
    },150);

 }

}
