import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval: number=0;
  @Output("incrementNumberEvent") incrementNumberPerSec = new EventEmitter<number>(); 
  gameNumber: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.incrementNumber()
    }, 1000)
  }
  onPauseGame() {
    clearInterval(this.interval)
  }

  incrementNumber(){
    this.incrementNumberPerSec.emit(this.gameNumber = this.gameNumber + 1)
  }

}
