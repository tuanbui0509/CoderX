function tiger() {
    this.fightWin = [];
    this.fightLost = [];
}

tiger.prototype.fight = function(dog) {
    this.fightWin.push(dog);
}


module.exports = tiger;