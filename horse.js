function horse(name) {
    this.name = name;
    this.stomach = [];
}

horse.prototype.eat = function(grass) {
    this.stomach.push(grass);
}

module.exports = horse;