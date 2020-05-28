function lion(name){
    this.name = name;
}

lion.prototype.run = function() {
    console.log(`${this.name} is running ...`);
}

module.exports = lion;