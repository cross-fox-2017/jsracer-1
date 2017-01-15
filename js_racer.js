"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length, sides) {
    this.players = players;
    this.banyakPemain = this.players.length
    this.length = length;
    this.sides = sides;
    this.finished = false;
    this.winner = "";
    this.board = [];
    this.bigger = [];
    this.pos = []
  }

  startingBoard(){
    for (let o = 0; o < this.banyakPemain; o++){
      this.board[o] = [];
      this.pos[o] = 0;
      for (let i = 0; i < this.length; i++){
        if (i == 0){
          this.board[o].push(this.players[o]);
        } else {
          this.board[o].push(" ");
        }
      }
      this.bigger.push(this.board[o].join(" | "));
    }
    return this.running();
  }

  giliran(){
    for (let i = 0; i < this.banyakPemain; i++){
      let dadu = new Dice(this.sides)
      this.pos[i] += dadu.roll();
      if (this.pos[i] + dadu.roll() >= this.length){
        this.pos[i] = this.length;
        break;
      }
    }
    return this.bigger;
  }

  gerak(){
    this.bigger = []
    for (let o = 0; o < this.banyakPemain; o++){
      this.board[o] = [];
      for (let i = 0; i < this.length+1; i++){
        if (i == this.pos[o]){
          this.board[o].push(this.players[o]);
        } else {
          this.board[o].push(" ");
        }
      }
      this.bigger.push(this.board[o].join(" | "));
    }
    return this.bigger;
  }

  running(){
    for (let i = 0; i < this.board.length; i++){
      console.log(`${this.board[i].join(" | ")}\n`);
    }
    return ""
  }

  finishLine(){
    for (let i = 0; i < this.banyakPemain; i++){
      if (this.pos[i] >= this.length){
        this.winner = `The Winner is ${this.players[i]}`;
        this.finished = true;
        break;
      }
    }
    this.giliran();
    this.gerak();
    this.sleep(1000)
    console.log(`\n`);
    this.running();
  }

  searchWinner(){
    while (this.finished == false){
      this.finishLine();
    }
    return this.winner;
  }

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }
}

export default JSRacer
