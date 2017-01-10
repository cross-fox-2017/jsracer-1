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

for (var i = 0; i < 6; i++) {
  runner.print_board()
  sleep(2000)
  runner.reset_board()
}


// runner.print_board()
