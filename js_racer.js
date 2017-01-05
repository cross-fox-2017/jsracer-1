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

  //done
  print_line(player, pos=0) {
    for (let i = 0; i < this.length; i++){
      if (i != pos){
        this.board.push("--")
      } else {
        this.board.push(player)
      }
    }
    return this.board.join(" | ")
  }
  advancing(players) {
    for (let i = 0; i < players.length; i++){
      let dadu = new Dice(6)
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
console.log(Berkuda.print_line("A", 10));
// console.log(dadu.roll());
export default JSRacer
