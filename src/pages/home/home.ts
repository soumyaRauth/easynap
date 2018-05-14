import { Component, OnInit,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  mins:any;
  hour:any;
  @ViewChild('setCursor') cursorSet ;
  @ViewChild('setCursorMinute') cursorSetMin ;
  constructor(public navCtrl: NavController,private keyboard: Keyboard) {
    
  }

  /**what will happen when the input field text changes */
  onInputTime(event){
    if(event){
      if(event.length>=2){
        setTimeout(() => {
          this.cursorSetMin.setFocus(); 
        },15);
      }
    } 
  }

  onInputHour(event){
    if(event){
      if(this.mins > 60 || event.length>2 ){
        this.mins="";
      }else if(this.mins< 0 || event.length>2){
        console.log(this.mins);
        this.mins="";
      } 
    }
  }
 
  eventHandler(keyPressed){
    console.log(keyPressed);
    /** On Enter key pressed change the cursor to other text input */
    if(keyPressed==13){
        this.cursorSetMin.setFocus();     
    }
    
  }

  /** on click set button */
  setAlarm(){
    let date = new Date()
    let time=date.getTime();
    console.log(time.toLocaleString());
  }

  /**sets the cursor to the input after 150 ms after the app opens */
  ngOnInit() {
    setTimeout(() => {
      this.cursorSet.setFocus();
      this.keyboard.show();
    },150);

 }

}
