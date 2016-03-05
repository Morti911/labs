var f = function() {
  this.x = 5; // window.x = 5
    (function() {
        this.x = 3; // window.x = 3
    })();
    console.log(this.x);
};
var obj = {
  x: 4,
  m: function(a,b) { // arguments [1,2]
    console.log(this.x, this.dog);
    obj.l.apply({z:6}, [5,6]);
  },
  l: function(a,b) {
    console.log(a,b);
  }
};

obj.m.call({ x:5, dog: 'd' }, 1, 2,3,4,5,6,7);
//obj.m.apply({ x:5, dog: 'd' }, a);
/*f();  // 3
var a = new f();  // 5*/
//obj.m(); // 4
//var f2 = new obj.m(); //
//var a = [1,2];


/*f.call(f);*/

/*var animal = function(say) {
  var a = 4;

  this.say = function() {
    return say + a;
  };
  this.run = true;
}*/

/*var smartAnimal = function() {
  this.eat = function() {
    return 'om nom nom';
  };
  this.jump = function() {
    return 'oh ye';
  };
}*/
/*
var animal = Object.create(Object.prototype, {
  say: function() {
    return say + a;
  }
});

var smartAnimal = Object.create(animal.prototype, {
  eat: function() {
    return 'om nom nom';
  },
  jump: function() {
    return 'oh ye';
  }
});
*/
/*var tempFunc = function() {};
tempFunc.prototype = animal.prototype;
smartAnimal.prototype = new tempFunc();*/

/*var fish = new smartAnimal('bulbul');

console.log(fish);
console.log(fish.eat());
*/
/*function animal(say) {
  var a = 4;

  this.say = function() {
    return say + a;
  };
  this.run = true;
}

var actions = {
  eat: function() {
    return 'om nom nom';
  },
  jump: function() {
    return 'oh ye';
  }
}

for (key in actions) {
  animal.prototype[key] = actions[key];
}

var cat = new animal('meow');
var dog = new animal('gav');
console.log(cat.say(), cat.eat(), cat.run);
console.log(dog.say(), dog.eat(), dog.run);
*/
/*var animal = {
  run: true
};

var rabbit = {
  jumps: true,
  __proto__: animal
};

for(var x in rabbit) {
  if (rabbit.hasOwnProperty(x)) {
    console.log(x, rabbit[x]);
  }
}

console.log(animal.hasOwnProperty('run'));
*/
/*'use strict'
function f() {
  this.a = '1';
  this.b = '2';
  this.f = function() {
    return this.a+this.b;
  }
}
var instance = new f();
//var badInstance = f(); // this === window
console.log(instance.f());
console.log(instance.a);
//console.log(a);
*/
/*function sum(x) {
    var z = 5+x;

    return function(y) {
       return z+y;
    };
}

var newFun = sum(2);
console.log(newFun(3));

var f = function(a1) {
  return function(b2) {
    return a1.replace('$0', и2)
  }
}

var view = f('<div>$0</div>');
var header = view('header');
var footer = view('footer');

console.log(sum(1));
console.log( sum(1)(2) );
*/
