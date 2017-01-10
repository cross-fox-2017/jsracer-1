"use strict"

import JSRacer from "./js_racer"

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

// Your code here...
let players = [{name:'a',pos : 0},{name:'b',pos : 0},{name:'c',pos : 0}]
const runner = new JSRacer(players)
for (let i=0; i<30; i++){
	runner.print_board();
	sleep(300)
	if(runner.players[0].pos > 29 || runner.players[1].pos > 29 ||runner.players[2].pos > 29){
          // runner.setPos();
          // runner.reset_board();
          runner.finished();
          break;
        }
        runner.reset_board();
}
//        runner.reset_board();
// runner.finished();
for(let i=0; i<players.length; i++){
	console.log('position '+players[i].name+': '+players[i].pos)
}
