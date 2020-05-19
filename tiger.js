function tiger() {
    this.fightWin = [];
    this.fightLost = [];
}

tiger.prototype.fight = function(dog) {
    this.fightWin.push(dog);
}

tiger.prototype.lost = function(lion) {
    this.fightLost.push(lion);
}

module.exports = tiger;