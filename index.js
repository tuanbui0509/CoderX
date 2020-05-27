var Dog = require('./dog');
var Cat = require('./cat');
var Mouse = require('./mouse');

var butch = new Dog('Butch');
var tom =  new Cat('Tom');
var jerry = new Mouse('Jerry',1);

// butch.sayHi();
// console.log("Before");
// console.log(jerry);
// console.log(tom);
// console.log(butch);
// tom.eat(jerry);
// jerry.die();
// butch.eat(tom);
// tom.die();
// console.log(tom);
// console.log(butch);
// console.log("After being ate tom and jerry are died");
// console.log(jerry);
// console.log(tom);
console.log(`I'm Mouse, My name is ${jerry.name} and i'm so happy wonderfull in my life`);
console.log('Tom eat Jerry');
tom.eat(jerry);
jerry.die();
console.log(`RIP ${jerry.name}`)
console.log(tom);
console.log('Tom eat Butch');
try {
tom.eat(butch);
} catch (error) {
    console.log('Error while cat eat a dog');
}

console.log(tom);