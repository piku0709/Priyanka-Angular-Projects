import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  id: number = 0
  @Output("incrementNumberEvent") incrementNumberPerSec = new EventEmitter<number>(); 
  gameNumber: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  onStart() {
    console.log(`start game`)
    this.id = setInterval(() => {
      this.incrementNumber()
    }, 1000)
  }
  onStop() {
    console.log(`stop game`)
    if(this.id) clearInterval(this.id)
  }

  incrementNumber(){
    console.log(`emit event of increasing number every 1 second`)
    this.incrementNumberPerSec.emit(this.gameNumber = this.gameNumber + 1)
  }

}
