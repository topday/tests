import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guess-number',
  templateUrl: './guess-number.component.html',
  styleUrls: ['./guess-number.component.css']
})
export class GuessNumberComponent implements OnInit {

  computerMax: number = Math.floor(Math.floor(Math.random() * 110)/10) + 1;
  computersNumber =  Math.floor(Math.floor(Math.random() * this.computerMax * 10)/10) + 1;
  playersNumber: number = 0;
  totalGuess: number = 0;
  isFail: boolean = false;
  isWon: boolean = false;

  constructor() {

    console.log('Computer\'s number', this.computersNumber);
  }

  ngOnInit() {
  }

  onSubmit() {

    this.playersNumber;

    if (this.totalGuess >= 3) {

      this.isFail = true;
      return;
    }

    if (this.isWon) return;

    if (this.computersNumber === this.playersNumber) {
   
      this.isWon = true;
      return;
    } else {
   
     this.isFail = (this.totalGuess >= 2) ? true : false; 
    }

    this.totalGuess++;
  }
}
