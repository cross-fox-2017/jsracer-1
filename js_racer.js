"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length, sides) {
    this.players = players;
    this.length = length;
    this.sides = sides;
    this.finished = false;
    this.board = []
  }
  print_board() {
    for (let i = 0; i < this.players.length; i++) {
      this.board.push([])
      for (let j = 0; j < this.length; j++){
        this.board[i].push([" | "])
      }
    }
    for (let k = 0; k < this.players.length; k++) {
      this.board[k] = this.board[k].join(" | ")
    }
    return this.board
  }
  print_line(player, pos) {

  }
  advancing(players) {
    for (var i = 0; i < players.length; i++){
      var dadu = new Dice(6)
      playerpos[i] += dadu.roll()
    }
  }
  finished() {
    if (playerPos >= this.length){
      this.finished == true
    } else {
      advanced_player(this.players)
    }
  }
  winner() {
    if (finished == true){
      return winPlayer
    } else {
      finished()
    }
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

var Berkuda = new JSRacer(["A", "B", "C"], 20, 6)
var dadu = new Dice(6)
console.log(Berkuda.print_board());
// console.log(dadu.roll());
export default JSRacer
