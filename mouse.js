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

Mouse.prototype.sleep = function(){
    console.log(`A mouse is sleeping`);
}

module.exports = Mouse;