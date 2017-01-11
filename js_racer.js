"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(playersTotal, length) {
    this.players = [];
    this.playerList = ['a','b','c','d','e']
    this.totalPlayer = playersTotal
    this.length = length || 30;
  }

  playersList(){
    for(var i=0; i<this.totalPlayer; i++){
      this.players.push({name: this.playerList[i], pos: 0})// initial position
    }
  }

  print_board() {
      for(var i=0; i<this.players.length; i++){
        this.print_line(this.players[i])
        this.advanced_player(this.players[i])
      }
  }

  print_line(player) {
    var line = [];
    for(var i=0; i<this.length; i++){
      if(player.pos !== i){
        line.push(" ")
      }
      else{
        line.push(player.name)
      }
    }
    console.log(line.join("|"));
    this.finished(player)
  }

  advanced_player(player) {
    player.pos += Dice.roll()
  }

  finished(player) {
    if(player.pos === this.length){
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


export default JSRacer
