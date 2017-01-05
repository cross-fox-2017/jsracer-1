"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length, sides) {
    this.players = players;
    this.banyakPemain = this.players.length
    this.length = length;
    this.sides = sides;
    this.finished = false;
    this.board = []
    this.bigger = []
    this.pos = []
  }
  startingBoard(){
    for (let o = 0; o < this.banyakPemain; o++){
      this.board[o] = []
      this.pos[o] = 0
      for (let i = 0; i < this.length; i++){
        if (i == 0){
          this.board[o].push(this.players[o])
        } else {
          this.board[o].push("--")
        }
      }
      this.bigger.push(this.board[o].join(" | "))
    }
    return this.bigger
  }
  giliran(){
    for (let i = 0; i < this.banyakPemain; i++){
      let dadu = new Dice(this.sides)
      this.pos[i] += dadu.roll()
    }
    return this.bigger
  }
  gerak(){
    this.bigger = []
    for (let o = 0; o < this.banyakPemain; o++){
      this.board[o] = []
      for (let i = 0; i < this.length; i++){
        if (i == this.pos[o]){
          this.board[o].push(this.players[o])
        } else {
          this.board[o].push("--")
        }
      }
      this.bigger.push(this.board[o].join(" | "))
    }
    return this.bigger
  }
  running(){
    for (let i = 0; i < this.board.length; i++){
      console.log(this.board[i].join(" | "));
    }
    return ""
  }
}
  // print_board() {
  //   for (let i = 0; i < this.players.length; i++){
  //     this.bigger.push(this.print_line(this.players[i], 0))
  //   }
  //   return this.bigger
  // }
  // //done
  // print_line(player, pos=0) {
  //   for (let i = 0; i < this.length; i++){
  //     if (i != pos){
  //       this.board.push("--")
  //     } else {
  //       this.board.push(player)
  //     }
  //   }
  //   return this.board.join(" | ")
  // }
  // advancing(players) {
  //   let dadu = new Dice(6)
  //   this.pos += dadu.roll()
  //   this.board = []
  //   return this.print_line(players, this.pos)
  // }
  // finished() {
  //   if (this.pos >= this.length){
  //     this.finished == true
  //   } else {
  //     this.advancing("A")
  //   }
  // }
  // winner() {
  //   if (finished == true){
  //     return winPlayer
  //   } else {
  //     finished()
  //   }
  // }
  // reset_board() {
  //   console.log("\x1B[2J")
  // }
// }

var Berkuda = new JSRacer(["A", "B", "C"], 20, 6)
var dadu = new Dice(6)
Berkuda.startingBoard();
Berkuda.giliran();
Berkuda.giliran();
Berkuda.giliran();
Berkuda.gerak()
console.log(Berkuda.running());


// console.log(dadu.roll());
export default JSRacer
