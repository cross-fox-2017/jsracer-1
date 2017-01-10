"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.players = [{name: 'a',pos : 0}, {name: 'b', pos : 0}];

    this.length = length || 20;

  }


  print_board() {
    for(let i = 0; i < this.players.length ;i++){


      this.print_line(this.players[i]);
      this.advanced_player(this.players[i]);


    }


  }
  print_line(player) {
    let arr = [];
    for(let i = 0; i < this.length ;i++){


          if(player.pos == i){
              arr.push(player.name);


          }//terakhir sampai disini
              else{
              arr.push(" ");
          }


    }
    console.log(arr.join("|"));
    if(player.pos == this.length)
         arr.push(player.name);
           return "Winner ; "+player.name;


  }

    advanced_player(player) {
      // player = {name: 'a', pos: 0}
      player.pos += Dice.roll();
    }

  //   winner(player){
  //
  //         if(player.pos == (this.length - 1))
  //
  //
  // }


  reset_board() {
    console.log("\x1B[2J");
  }
}



export default JSRacer
