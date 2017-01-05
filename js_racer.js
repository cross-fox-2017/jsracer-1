"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    // this.position = []
    this.players = [{name: 'a', pos: 0}, {name: 'b', pos: 0}]
    this.length = length || 20
    // this.board = []
    // this.aWinner = false
  }
  print_board() {
    for (var i = 0; i < this.players.length; i++) {
      this.print_line(this.players[i])
      this.advanced_player(this.players[i])
    }
    // for (var i = 0; i < 3; i++) {
    //   var row = []
    //   for (var j = 0; j < 10; j++) {
    //     row.push(' ')
    //   }
    //   this.board.push(row)
    // }
    // return this.board
  }

  print_line(player, pos) {
    // var user = ['A','B','C']
    // this.players = player
    // this.position = [0,1,2]
    // for (var i = 0; i < this.players; i++) {
    //   this.board[i][0] = user[i]
    // }
    // return this.board
    var arr = []
    for (var i = 0; i < this.length; i++) {
      if (player.pos == i) {
        arr.push(player.name)
      }else {
        arr.push(' ')
      }
    }
    console.log(arr.join('|'));
  }
  advanced_player(player) {
    // while (!aWinner) {
    //
    // }
    var dice = new Dice()
    player.pos += dice.roll()
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
