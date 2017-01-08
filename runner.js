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
  sleep(1500);
  if(runner.finish === false){
    runner.reset_board();
  }
} while (runner.finish === false)
