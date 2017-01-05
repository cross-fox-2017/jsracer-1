"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players = 5, length = 15) {
    this.players = this.playerName(players);
    this.length = length;
  }

  playerName(count) {
    let alphabet = ['a','b','c','d','e','f','g']
    let arr = []
    for(let i = 0; i < count; i++){
      let player = {name: alphabet[i], pos: 0}
      arr.push(player)
    }
    return arr;
  }

  print_board() {
    for(let i = 0; i < this.players.length; i++){
      this.print_line(this.players[i]);
      this.advanced_player(this.players[i]);

    }
  }
  print_line(player) {
    // Cetak per baris
    let line = '';
    for(let i = 0; i < this.length; i++){
      if(player.pos === i){
        line += `|${player.name}`;
      } else {
        line += '| ';
      }
    }
    console.log(line);
  }

  advanced_player(player) {
    // player maju
    player.pos += Dice.roll()
  }

  finished() {

  }
  winner() {
    console.log(`Player: ${player.name} is the winner`)
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
