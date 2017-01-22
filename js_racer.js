"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length, sides) {
    this.players = [ { name: "a", pos: 0 }, { name: "b", pos: 0 }, { name: "c", pos: 0 }  ];
    this.length = length;
    this.sides = sides
  }

  print_board() {
    for (let i = 0; i < this.players.length; i++) {
      this.printLine(this.player[i]);
      this.advancedPlayer(this.player[i]);
    }

  }

  print_line(player, pos) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      if (player.pos == i) {
        arr.push(player.name);
      } else {
        arr.push(" ")
      }
    }
    console.log(arr.join('|'));
    if (player.pos == this.length) {
      arr.push(player.name);
      return `Winner : ${player.name}`
    }
  }

  advanced_player(player) {
    player.pos += Dice.roll()
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
