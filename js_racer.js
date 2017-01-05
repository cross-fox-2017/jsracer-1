"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length, sides) {
    this.pemain = [{name: 'A', pos: 0}, {name:'B', pos:0}]
    this.panjang = length || 30;
  }
  startGame() {
    for (let i = 0; i < array.length; i++) {
      print_track(this.pemain[i])
      diceRoll(this.pemain[i])
    }
  }
  print_track(players) {
    let arrTrack = []
    for (let i = 0; i < this.panjang; i++) {
      if (players.pos === i) {
        arrTrack.push(players.name)
      }
      else {
        arrTrack.push(' ')
      }
      console.log(arrTrack.join("|"));
    }
  }

  diceRoll(players) {
    players += Dice.roll();
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
