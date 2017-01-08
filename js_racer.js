"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players = 3, length = 20) {
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
      if(this.finish){
        break;
      } else {
        this.print_line(this.players[i]);
        this.advanced_player(this.players[i]);
        this.finished(this.players[i]);
      }     
    }
  }

  print_line(player) {
    let line = '';
    for(let i = 0; i < this.length; i++){
      if(player.pos === i){
        line += `|${player.name}`;
      } else {
        line += '[ ';
      }
    }
    console.log(line);
  }

  advanced_player(player) {
    player.pos += Dice.roll()
    if(player.pos >= this.length){
      player.pos = this.length;
    }
  }

  finished(player) {
    if(player.pos >= this.length){
      this.finish = true;
      this.winner(player)
    }
  }
  winner(player) {
    console.log(`Player: ${player.name} is the winner`)
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

let runner = new JSRacer();
console.log(runner.playerName(5));

export default JSRacer
