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
let runner = new JSRacer()
runner.reset_board()

while (runner.finish == false) {
  runner.print_board();
  sleep(500)
  runner.reset_board()
}

for (var i = 0; i < runner.players.length; i++) {
  if (runner.players[i].pos >= runner.length) {
    runner.players[i].pos = runner.length-1
  }
  runner.print_track(runner.players[i])
}

for (var j = 0; j < runner.players.length; j++) {
  if (runner.players[j].pos >= runner.length-1) {
    console.log('the winner is ' + runner.players[j].name)
    break;
  }
}
