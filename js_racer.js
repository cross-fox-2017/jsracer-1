"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.players = [{name: 'A', pos: 0}, {name:'B', pos:0}, {name:'C', pos:0}]
    this.length = length || 30;
    this.finish = false
  }

  print_board(){
    if (this.finish == false) {
      for (var i = 0; i < this.players.length; i++) {
          this.print_track(this.players[i])
          this.diceRoll(this.players[i])
          this.finished(this.players[i])
      }
    }
  }

  print_track(player) {
    let track = ''
    for (let i = 0; i < this.length; i++) {
      if (player.pos == i) {
        track += '|' + player.name
      }
      else {
        track += '| '
      }
    }
    console.log(track);
  }

  diceRoll(player) {
    player.pos += Dice.roll()
  }

  finished(player) {
    if (player.pos >= this.length - 1) {
      this.finish = true;
    }
  }

  reset_board() {
    console.log("\x1B[2J")
  }

}

export default JSRacer
