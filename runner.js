"use strict"

import JSRacer from "./js_racer"

// Your code here...
var Berkuda = new JSRacer(["A", "B", "C"], 20, 6)

console.log(Berkuda.startingBoard());
console.log(Berkuda.searchWinner());
