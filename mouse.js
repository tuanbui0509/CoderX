 function Mouse(name,age) {
    this.name = name;
    this.dead = false;
    this.age = age;
}

Mouse.prototype.die= function () {
    this.dead = true;
};

module.exports = Mouse;