
function Cat(name) {
    this.stomach = [];
    this.name = name;
    this.dead = false;
}

Cat.prototype.eat = function(mouse) {
    this.stomach.push(mouse)
}

Cat.prototype.die = function() {
    this.dead = true;
}

module.exports = Cat;
