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

tiger.prototype.eat = function() {
    console.log('A tiger is eatting bone');
}

module.exports = tiger;