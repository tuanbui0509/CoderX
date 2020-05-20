var Dog = require('./dog');
var Cat = require('./cat');
var Mouse = require('./mouse');

var butch = new Dog('Butch');
var tom =  new Cat('Tom');
var jerry = new Mouse('Jerry');

butch.sayHi();
tom.eat(jerry);
butch.eat(tom);
console.log(tom);