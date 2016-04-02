1) function nameFunction () {}
2) var nameFunction = function() {}
3) var nameFunction = new Function();
4) (function() {})()
nameFunction (a, b, c, d, f) {
  console.log(arguments);// [1, 'a', {m:2, n:3}, o, loc]
  d = {};
  d['t'] = 4;
  f = 5;
  console.log(d); // { t: 4 }
}
var loc = 'b';
var o = { a:1, b: 2, c:3 };
nameFunction(1, 'a', {m:2, n:3}, o, loc);
console.log(loc, o);

this === window
function decDeep(i) {
  this.a = 4;
  console.log(i); //0
  if (i === 0) { return; }
  decDeep(--i);
  console.log(this.a);
}
window.a = 4
decDeep(5);

function Animal(name) {
  var local = 5; //private
  // this == {}
  this.animalName = name; //public
  //this == {animalName: } // this !== window
  this.birthday = new Date();
  console.log('aaaaaaaaa');
}

Animal.prototype.getName = function () {
  this.counter = this.counter ? this.counter + 1 : 1;
  return this.animalName;
}

Animal.prototype.foo = function () {
  return 'foo';
}

var dog = new Animal('dog2'); //{animalName: 'dog2'}
var cat = new Animal('cat1'); //{animalName: 'cat1', counter: 1} __proto__
cat.counter //undefined
var cName = cat.getName();
cat.counter //1
var test = cat.foo(); // 'foo'
cat.getName();
cat.getName();

cat.counter //3

cat['jump'] = 1;

dog.getName()
dog.counter //1

function Dog() {
  Animal.apply(this, arguments);
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.run = function() {};

var rex = new Dog('Rex');
rex.getName();
rex.run();



function Robot(name) {
  this.name = name;
}

Robot.prototype = Object.create(String.prototype);

var terminator = new Robot('Shvarts');
terminator // {name: 'Shvarts'}
terminator.name;

terminator.hasOwnProperty('name');
//terminator doesn`t have property hasOwnProperty
