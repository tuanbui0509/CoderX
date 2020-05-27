var Dog = require('./dog');
var Cat = require('./cat');
var Mouse = require('./mouse');

var butch = new Dog('Butch');
var tom =  new Cat('Tom');
var jerry = new Mouse('Jerry',1);

butch.sayHi();
console.log("Before");
console.log(jerry);
console.log(tom);
tom.eat(jerry);
jerry.die();
butch.eat(tom);
tom.die();
console.log(tom);
console.log(butch);
console.log("After being ate tom and jerry are died");
console.log(jerry);
console.log(tom);