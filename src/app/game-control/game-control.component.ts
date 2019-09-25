import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  @Output() gameStarted = new EventEmitter<number>();
  lastNumber = 0;
  constructor() { }

  ngOnInit() {
  }
  onGameStart() {
    this.interval = setInterval(()=>{
      this.gameStarted.emit(this.lastNumber + 1)
      this.lastNumber++
    },1000)
  
    
  }
  onStopGame(){
    clearInterval(this.interval)
  }
}
