'use strict';

function Animal(name) {
  this.name = name;
}

Animal.prototype.say = function() { console.log(this.name); };

function Cat() {
  Animal.apply(this, arguments);
}

//Cat.prototype = new Animal();

/*var tempFunc = function() {};
tempFunc.prototype = Animal.prototype;
Cat.prototype = new tempFunc();*/
//Cat.prototype.superclass = Animal;

Cat.prototype = Object.create(Animal.prototype);
//Cat.prototype.constructor = Animal;

Cat.prototype.go = function() { console.log(this.name + ' going'); };

var catLuna = new Cat('Luna');

catLuna.say();
catLuna.go();


/* dev tools call stack */