'use strict';

function Animal(name) {
  this.name = name;
  this.birhday = new Date();
}

Animal.prototype.say = function() {
  console.log(this.name);
};

Animal.prototype.getDateOfBirth = function() {
  console.log(this.name + ': ' + this.birhday);
};

function Cat() { // arguments
  Animal.apply(this, arguments); //this
  //this.name = 'cat: ' + name;
}

var tempFunc = function() {};
tempFunc.prototype = Animal.prototype;
Cat.prototype = new tempFunc();

Cat.prototype.say = function(text) { //arguments[0]
  if (text) {
    console.log(text);
  } else {
    console.log('Cat name: ');
    Animal.prototype.say.apply(this, arguments);
  }
};

Cat.prototype.run = function() {
  console.log('run...');
};

// Class Dog
function Dog() {
  Animal.apply(this, arguments);
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.sit = function() {
  console.log('I am siting');
};

Dog.prototype.say = function(text) {
  if (text) {
    console.log(text);
  } else {
    console.log('Dog name: ');
    Animal.prototype.say.apply(this, arguments);
  }
};

// class BreedsCat
function BreedsCat () {
  Cat.apply(this, arguments);
}

BreedsCat.prototype = Object.create(Cat.prototype);

BreedsCat.prototype.sit = function() {
  console.log('I am siting');
};

var fiona = new BreedsCat('Fiona');

fiona.say(); // 'Cat name: Fiona'
fiona.say('meow'); // 'meow'
fiona.run(); // run...
fiona.sit(); //'I am siting'

var breeds = {
  sit: function() {
    console.log(this.name + ': I am siting');
  },
  serve: function() {
    console.log('I am serving');
  }
};

function BreedsDog() {
  Dog.apply(this, arguments);
}

BreedsDog.prototype = Object.create(Dog.prototype);

for (var key in breeds) {
  BreedsDog.prototype[key] = breeds[key];
}

BreedsDog.prototype.run = function() {
  console.log('running...');
};


var luna = new Cat('Luna');
var mittens = new Cat('Mittens');
luna.say();
mittens.say('something');
mittens.getDateOfBirth();

var bobik = new Dog('bobik');
bobik.say();
bobik.sit();
bobik.getDateOfBirth();

var recks;

setTimeout(function() {
  recks = new BreedsDog('Recks');
  recks.say();
  recks.say('gav');
  recks.run();
  recks.sit();
  recks.serve();
  recks.getDateOfBirth();
}, 1000);

setTimeout(function() {
  recks.getDateOfBirth();
}, 2000);

String.prototype.add1 = function() {
  return this + ' 1';
};

String.prototype.add = function(text) {
  return this + ' ' + text;
};

function add2 () {}

var a = 'new string'; //String

a.add1(); // new string 1
a.add('100') // new string 100

/*
var cat = new Animal('cat');
var dog = new Animal('dog');

console.log(cat);
console.log(dog);
*/
