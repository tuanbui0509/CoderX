 function Mouse(name,age) {
    this.name = name;
    this.dead = false;
    this.age = age;
}

Mouse.prototype.die= function () {
    this.dead = true;
};

Mouse.prototype.run = function(){
    console.log(`A mouse is running`);
}

module.exports = Mouse;