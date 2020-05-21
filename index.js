var Dog = require('./dog');
var Cat = require('./cat');
var Mouse = require('./mouse');

var butch = new Dog('Butch');
var tom =  new Cat('Tom');
var jerry = new Mouse('Jerry',1);

butch.sayHi();
tom.eat(jerry);
butch.eat(tom);
console.log(tom);
console.log(butch);