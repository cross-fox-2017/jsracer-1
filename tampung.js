"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.players = [];
    this.playerList = ['a','b','c','d','e']
    this.totalPlayer = players
    this.length = length || 30;
    this.finish = false
  }

  playersList(){
    for(var i=0; i<this.totalPlayer; i++){
      this.players.push({name: this.player[i], pos: 0})// initial position
    }
  }

  print_board() {
      for(var i=0; i<this.players.length; i++){
        this.print_line(this.players[i],this.players[i])
        this.advanced_player(this.players[i])
        //this.finished(this.players[i])
      }
  }

  print_line(player) {
    var line = [];
    for(var i=0; i<this.length; i++){
      if(player.pos !== i){
        line.push(" ")
      }
      else{
        line.push(player)
      }
    }
    console.log(line.join("|"));
    finished(player)
  }

  advanced_player(player) {
    player.pos += Dice.roll()
  }

  finished(player) {
    if(player.pos === this.length){
      winner(player)
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
