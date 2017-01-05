"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players = 3, length = 10) {
    this.players = players;
    this.length = length;

    this.playerBoard = [];
    this.lengthBoard = '';

    this.player = [];
    this.playerNames = ['a','b','c','d','e'];

    this.position = {};
    this.board = [];

  }
  playerName() {
    for(let i = 0; i < this.players; i++){
      this.player.push(this.playerNames[i]);
      this.position[this.playerNames[i]] = 0;
    };
  }
  print_board() {
    this.playerName();
    for(let i = 0; i < this.players; i++){
      this.playerBoard = [];
      this.board.push(this.playerBoard);
      for(let j = 0; j < this.length; j++){
        this.board[i].push(this.lengthBoard);
      }
    }
    this.print_line();
    this.advanced_player();
    for(let j = 0; j < this.board.length; j++){
      console.log(this.board[j].join("| "))
    }
  }
  print_line() {
    for(let i = 0; i < this.players; i++){
      this.board[i][0] = this.player[i];
    }
  }

  advanced_player() {
    for(let i = 0; i < this.players; i++){
      let roll = Dice.roll();
      this.board[i][this.position[this.playerNames[i]]] = ' ';
      this.board[i][roll] = this.player[i];
      this.position[this.playerNames[i]] += roll;
    }

  }
  finished() {

  }
  winner() {

  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
