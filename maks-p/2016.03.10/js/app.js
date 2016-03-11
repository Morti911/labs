'use strict';

function declare(className, superClass, props) {
  if (typeof className !== 'string') {
    props = superClass;
    superClass = className;
    className = undefined;
  }

  var classConstructor = props.constructor || function() {},
      superClassLength,
      method;

  if (superClass !== null && superClass.length) {
    superClassLength = superClass.length;
  }

  if (typeof superClass === 'function') {
    classConstructor.prototype = Object.create(superClass.prototype);
  } else if (typeof superClass === 'object' && superClassLength && superClassLength !== 0) {
    var i = 0,
        tempFunc = function() {};

    for(; i < superClassLength; i++) {
      for (method in superClass[i].prototype) {
        tempFunc.prototype[method] = superClass[i].prototype[method];
      }
    }

    classConstructor.prototype = new tempFunc();
  }

  for (method in props) {
    classConstructor.prototype[method] = props[method];
  }

  classConstructor.prototype._className = className;

  if (className) {
    window[className] = classConstructor;
  } else {
    return classConstructor;
  }
}

declare('Animal', null, {
  name: 'Animal name',
  say: function() { console.log('Animal say'); },
  getName: function() { console.log(this.className + ': ' + this.name); },
});

declare('Smarty', null, {
  serve: function() { console.log('I am serving'); }
});

declare('Cat', Animal, {
  className: 'Cat',
  run: function() { console.log('I am running'); }
});

declare('Dog', [Animal, Smarty], {
  constructor: function(name, age) {
    this.name = name;
    this.age = age;
  },
  sit: function() { console.log('I am sitting'); },
  getName: function() {
    console.log('Dog: ' + this.name);
    //Animal.prototype.getName.apply(this, arguments);
    this.inherited();
  },
  say: function() {
    console.log('Dog say');
    //Animal.prototype.say.apply(this, arguments);
    this.inherited();
  }
});

declare('Fish', [Animal, Smarty, Cat], {
  swim: function() { console.log('I am swiming'); }
});

(function() {
  var AnimalLocal = declare(null, {
    say: function() { console.log('local say'); }
  });

  var catLocal = new AnimalLocal();

  catLocal.say();
})();

var cat = new Animal();
var smarty = new Smarty();
var fiona = new Cat('Fiona');
var rex = new Dog('Rex', 2);

cat.say();
console.log(cat.name);

smarty.serve();

fiona.say();
fiona.run();
console.log(fiona.name);

rex.say();
rex.serve();
rex.sit();
