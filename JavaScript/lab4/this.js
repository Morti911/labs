'use strict';
/*--------------Prototypes---------------------*/
/*
function Animal(name) {
    this.name = name;
    this.birthDay = new Date();
}

Animal.prototype.say = function(text) {
  if (text){
        console.log(text);
    } else {
    console.log('Cat name: ' + this.name); 
    }
};
//var cat = new Animal('cat');
//var dog = new Animal('dog');

function Cat() {
    Animal.apply(this, arguments);
    //this.name = name + 1;
}

var tempFunc = function() {};
tempFunc.prototype = Animal.prototype;
Cat.prototype = new tempFunc;

Cat.prototype.run = function() {
    console.log('run... like hell!')
};


var luna = new Cat('Luna');
var mittens = new Cat('Mittens');

luna.say();
mittens.say('Meow!');
mittens.say();

function Dog() {
    Animal.apply(this, arguments);
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.sit = function() {
    console.log("I'm sitting!");
};

var bobik = new Dog('Bobik');
bobik.say();
bobik.sit();

function CatBreed() {
    Cat.apply(this, arguments);
}

CatBreed.prototype = Object.create(Cat.prototype);

CatBreed.prototype.sit = function(){
    console.log("I'm sitting!");
};

var fiona = new CatBreed('Fiona');

fiona.sit();// I'm sitting;
fiona.say('something');
fiona.say();
fiona.run();

var breeds = {
    sit: function() {
        console.log("I'm sitting!");
    },
    serve: function() {
        console.log("Go fcuk your self, you skunk!");
    }
};

function Dogbreed() {
    Dog.apply(this, arguments);
}

Dogbreed.prototype = Object.create(Dog.prototype);

for (var key in breeds ) {
    Dogbreed.prototype[key] = breeds[key];
}

Dogbreed.prototype.run = Cat.prototype.run;

var corgie;

setTimeout(function() {
corgie = new Dogbreed('Finn');

corgie.serve();
corgie.sit();
corgie.say('Woof woof!');
corgie.run();
corgie.getDateOfBirth();
    
}, 1000);

setTimeout(function() {
  corgie.getDateOfBirth();
}, 2000);


Animal.prototype.getDateOfBirth = function() {
    console.log(this.name + ':'+ this.birthDay);
};

fiona.getDateOfBirth();
*/

/*-----------------Strings------------------*/

String.prototype.add = function(text) {
  return this + ' ' + text;
  console.log(this + ' ' + text);
};

var a = 'new string';

//a.add1();
a.add('100');

/*

/*----------------Closures etc.----------------*/

/*
function f () {
    this.a = '1';
    this.b = '2';
    this.f = function(){
        return this.a + this.b;
    }
}

var instance = new f();

console.log(instance);
console.log(instance.a);
console.log(instance.f());

function animal(say) {
    this.name = 'animal';
    this.say = function() {
        return this.name + ' says ' + say;
    }
}

var cat = new animal('meow');
console.log(cat.say());

var actions = {
    eat: function() {
        return 'om nom nom';
    },
    bark: function() {
        return 'woof woof'
    }
}

var dog = new animal();

for(var key in actions){
    animal.prototype[key] = actions[key];
}

for(var i in dog){
    console.log(i);
}

function smartAnimal() {
    this.eat = function() {
        return 'om nom nom';
    };
    this.think = true;
}

var tempFunc = function() {};
tempFunc.prototype = animal.prototype;
smartAnimal.prototype = new tempFunc();

var fish = new smartAnimal('bloob bloob');
console.log(fish.say());
*/




















