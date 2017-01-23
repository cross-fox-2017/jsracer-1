"use strict"

import{move}from "./dice.js";
import{player} from "./js_racer.js"
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

var pl= new player("a",0)
var pl2=new player("b",0)
var pl3=new player("c",0)
var rand=' ';
var posEnd=0;

function makeBoard(players){
  var arr=[[]];
  var row=arr[0];
  var isi=' ';
  var pl= players.name
  for(var i=0;i<30;i++){
    row.push(rand);
  }
  row.splice(0,1,pl);
  players.tracks=row
  return players.tracks.join('|')
}

console.log(makeBoard(pl));
console.log(makeBoard(pl2));
console.log(makeBoard(pl3));

while(pl.pos<29&&pl2.pos<29&&pl3.pos<29){
  console.log(" ");
  console.log(move(pl));
  if(pl.pos===29){
    console.log(pl2.tracks.join('|'))
    console.log(pl3.tracks.join('|'))
    console.log(`\n The winner is Player ${pl.name}`)
    break;
  }
  console.log(move(pl2));
  if(pl2.pos===29){
    console.log(pl3.tracks.join('|'))
    console.log(`\n The winner is Player ${pl2.name}`)
    break;
  }
  console.log(move(pl3));
  if(pl3.pos===29){
    console.log(`\n The winner is Player  ${pl3.name}`)
    break;
  }
}
