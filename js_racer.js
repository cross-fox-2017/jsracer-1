"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players = 3, length = 30) {
    this.players = this.playerName(players);
    // this.players = [{name: a, pos: 0}. {name: b, pos: 0}, name: c, pos: 0]
    this.length = length;
    this.finish = false;
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
      this.finished(this.players[i]);  
    }
  }

  print_line(player) {
    let line = '';
    for(let i = 0; i < this.length; i++){
      if(player.pos === i){
        line += `|${player.name}`;
      } else {
        line += `| `;
      }
    }
    console.log(line);
  }

  advanced_player(player) {
    player.pos += Dice.roll()
  }

  finished(player) {
    if(player.pos >= this.length - 1){
      this.finish = true;
    }
  }

  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer






