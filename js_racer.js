export class player {
  constructor(codename, posEnd, track) {
    this.codename= codename
    this.posEnd = posEnd
    this.track= track
  }
  get name(){
    return this.codename
  }
  get pos(){
    return this.posEnd
  }
  get tracks(){
    return this.track
  }
  set tracks(val){
    this.track=val
  }
  set pos(val){
    this.posEnd=val
  }
}
