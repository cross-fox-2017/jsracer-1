"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length, sides) {
    this.players = players;
    this.length = length || 30;
  }
  print_board() {
    for(let i=0; i<this.players.length; i++){
      this.print_line(this.players[i].name,this.players[i].pos)
      this.advanced_player(this.players[i])
      // this.finished();
    }
  }
  print_line(player, pos) {
    let arr = [];
    for(let i=0; i<this.length; i++){
      if(i==pos){
        arr.push(player)
      }
      else{
        arr.push(' ');  
      }
    }
    console.log(arr.join('|'));
  }
  advanced_player(player) {
    player.pos+= Dice.roll();
  }
  setPos(){
    this.players[0].pos = 29;
  }
  finished() {
    for(let i=0; i<3; i++){
      this.print_line(this.players[i].name,this.players[i].pos)
      // this.print_line(this.players[i].name,this.players[i].pos)
    }
  }
  winner() {

  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
