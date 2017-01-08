"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.players = this.playerName(players);
    this.length = length;
    this.flag = false;
  }

  playerName(playerCount) {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j'];
    let arr = [];
    for(let i = 0; i < playerCount; i++) {
      let player = {name: alphabet[i], position: 0}
      arr.push(player);
    }
    return arr;
  }

  print_board() {
    for (let j = 0; j < this.players.length; j++) {
      if(this.players[j].position <= this.length) {
        this.print_line(this.players[j]); // print line setiap player
        this.advanced_player(this.players[j]); // majuin player dari posisi 0
        this.finished(this.players[j]);
      }
      else {
        break;
      }
    }
  }

  // untuk print line a| | | | | | | | | | | | | |
  print_line(player) {
    let arr = []
    for(let i = 0; i < this.length; i++) {
      if (player.position == i) {
        arr.push(player.name);
      }
      else {
        arr.push(" ");
      }
    }
    console.log(arr.join("|"));
  }

  advanced_player(player) {
    player.position += Dice.roll();
    if (player.position >= this.length){
      player.position = this.length;
    }
  }

  finished(player) {
    if (player.position >= this.length) {
      this.winner(player);
      this.flag = true;
    }
  }
  winner(player) {
    console.log(`The Winner is: ${player.name}!`);
  }
  reset_board() {
    console.log("\x1B[2J");
  }
}

export default JSRacer
