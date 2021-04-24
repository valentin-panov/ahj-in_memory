export default class Sorting {
  constructor()
  gamePlay() {
    setInterval(() => {
      let newHole = this.activeHole;
      while (newHole === this.activeHole) {
        newHole = Math.floor(Math.random() * this.divArray.length);
      }
      this.activeHole = newHole;
      this.moveGoblin(this.activeHole);
    }, 1000);
  }
}