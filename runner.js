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
let runner = new JSRacer();
runner.reset_board();

do {
  runner.print_board()
  sleep(500);
  runner.reset_board();
} while (runner.finish === false)


for(let i = 0; i < runner.players.length; i++){
  if(runner.players[i].pos >= runner.length){
    runner.players[i].pos = runner.length - 1;
  }
  runner.print_line(runner.players[i])
}

for(let i = 0; i < runner.players.length; i++){
  if(runner.players[i].pos >= runner.length - 1){
    console.log(`${runner.players[i].name} is the winner`)
    break;
  }
}
