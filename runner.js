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
let racer = new JSRacer(4, 15);
racer.reset_board();

do {
  racer.print_board();
  sleep(1000);
  if(racer.flag === false) {
    racer.reset_board();
  }
}
while (racer.flag === false)
