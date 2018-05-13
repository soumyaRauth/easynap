import { Component, OnInit,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  @ViewChild('setCursor') cursorSet ;
  @ViewChild('setCursorMinute') cursorSetMin ;
  constructor(public navCtrl: NavController,private keyboard: Keyboard) {
    
  }

  onInputTime(e){
    console.log(e.length);
    if(e.length===2){
      setTimeout(() => {
        this.cursorSetMin.setFocus();
      },150);
    }

  }

  /**sets the cursor to the input after 150 ms after the app opens */
  ngOnInit() {
    setTimeout(() => {
      this.cursorSet.setFocus();
      this.keyboard.show();
    },150);

 }

}
