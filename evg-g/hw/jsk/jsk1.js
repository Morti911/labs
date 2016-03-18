/*if (confirm ( 'Are you man')) {
    alert ('You are happy');
}
else {
  alert ( 'Wow' );
}

prompt ( 'Input your name' );

document.write ( 'wrot by js' );


var name = 'test';

console.log (name);

==========================================================
var userInput = prompt ( 'введите два числа через пробел' );

var userInputArray = userInput.split(' '); // создаем массив из строки разделив по заданному параметру

console.log( userInputArray );

var a = parseInt(userInputArray[0], 10); // преобразовываем в численный тип данных
var b = parseInt(userInputArray[1], 10);

console.log(a+b);

var userOperation = prompt ( 'Введите математическую операцию "+" "-" "*" "/"' );

console.log(eval(a + userOperation + b)); // обработка (a + userOperation + b) evalом как отдельным браузером куска кода яваскрипт
==============================================================

var userInput = prompt ('Введите число');         // условия if - else
if (userInput == 1) {
    console.log('1');
} else if (userInput == 2) {
    console.log('2');
} else {
    console.log('not 1 and not 2');
}
===============================================================


var userInput = prompt ('Введите что хотите :)');       // условия switch - case
switch (userInput) {
  case 'a': console.log('a');
    break;
  case 'hello': console.log('Hi');
    break;
  default: console.log('Ha-Ha-Ha');
    break;
}
==============================================================
var person = {fname:'John', lname:'Doe',age:25};   // Цикл прохода по обьекту
  var text = '';
  for( var x in person ) {
      text += person[x]+' ';
  }

  console.log(text);
  ==============================================


for (var i = 0; i < 10; i++) {
    if (i%2 == 0) {
    console.log(i);
  }
}
=======================================
                                                      // разобраться, что то не правильно работает!!!!!!!!!!!!
var point = +prompt ('enter your point 0-100');

if (point >=0 & point <=59) {
  mark ='FX';
} else if (point >=60 && point <=64) {
  mark = 'E';
} else if (point >=65 && point <=74) {
  mark ='D';
} else if (point >=75 && point <=84) {
  mark ='C';
} else if (point >=85 && point <=94) {
  mark ='B';
} else if (point >=95 && point <=100) {
  mark ='A';
} else if (point >100) {
  mark = 'Wow! You a cool!';
} else if (point <0) {
  mark = 'Foo! You a Loozer!';
} else if (point == null && !isNan(point)) {
  mark ='Вы не ввели свои балы!';
}
 alert (mark);

=========================================
                                      // Бесконечный ввод пока не введешь stop
for (;;) {
  var input = prompt('Ввод данных');
    if (input === 'stop') {
      break;
    }
  }
=============================================

                                                      // массивы
var arr = [4, 'hi', false, [7, 12]];
alert (arr [3][1]);

arr[7] = 10;
alert (arr);
alert (arr.length);   // длинна массива
alert (arr.indexOf('hi'));   // в каком индексе лежит 'hi'
arr.push ('last'); // добавить элемент 'last' в конец массива
arr.pop (); // удалитьть элемент  в конце массива
arr.unshift ('Start'); // добавить элемент 'Start' в начало массива
arr.shift ('); // удалитьть элемент в начале массива

alert (arr);

delete arr[2]; // стереть в массиве элемент под индексом [2] а в обьекте { } удалит этот элемент
alert (arr);

arr.splice (2, 5);  // удалить из массива начиная с элемента под индексом "2" количество элементов равное "5" ( у обьекта нет такой команды)
alert (arr);

var arrSort = [2, 65, 54, 8, 96, 73, 15];
alert (arrSort.sort()); // отсортировать значения элементов массива по алфавиту

arrSort.sort(function(a, b){    // отсортировать значения элементов массива по возрастанию
  if (a<b) {
    return -1;
  }   else if (a>b) {
      return 1;
  }   else {
      return 0;
  }
})

alert (arrSort);
========================================================
                                        // обьекты
var o = {lname: 'Doe', fname: 'Jone', age: 25};

console.log(o);
console.log(o.fname);  // обращение к элементу массива по ключу
console.log(o['fname']); // обращение к тому же элементу массива по ключу способ 2

o.a = {b: { c: { d:{}}}}
console.log(o);
==========================================================

var markerAvto = +prompt('Введите количество авто');

var avto = [];

for (var i = 0; i < markerAvto; i++) {
  var firmName = prompt('Введите марку авто №'+i);
  var modelName = prompt('Введите модель авто №'+i);
  var engineDisplacement = +prompt('Введите обьем двигателя авто №'+i);
  avto[i] = {firmName: firmName, modelName: modelName, engineDisplacement: engineDisplacement};
}

console.log(avto);

for (var i = 0; i < markerAvto; i++) {
  if (avto[i]['engineDisplacement'] >=2.0) {
    console.log(avto[i]);
  }
}

avto.sort(function(a, b) {
    if (a.firmName < b.firmName) {
      return -1;
    } else if (a.firmName > b.firmName) {
      return 1;
    }

    return 0;
})

console.log(avto);
=====================================================

function sum(x, y) {
  var result = 0;
  i = 0;
  counts = arguments.length;

  for (; i < counts; i++) {
    result += arguments[i];
  }
  return result;
}

var sum1 = sum (1, 2);
var sum2 = sum (1, 2, 3, 4);
var sum3 = sum (1, 2, 3, 4, 5, 5, 55, 66);

console.log(sum1);
console.log(sum2);
console.log(sum3);

  console.log(arguments);                        //arguments для передачи любого количества значений
  console.log(arguments.length);                 // создает ПСЕВДО-МАССИВ, выглядит как массив и имеет длинну,
  console.log(typeof arguments);                 // но прототипы не такие как у массива, и
};

sum1(1, 2);
sum1(1, 2, 3, 4);
==============================================
                                         // калькулятор
var operations = {
  plus: function(a, b) {
  return  a + b;
  },

  minus: function(a, b) {
  return a - b;
  },

  inc: function(a) {
  return ++a;
  },

  dec: function(a) {
  return --a;
  },
};

console.log(operations.plus(3, 4));
console.log(operations.minus(5, 4));
console.log(operations.inc(5));
console.log(operations.dec(9));
================================================
                                             // вызов функции каждые х милисекунд
setInterval(function () {
  console.log('setInterval');
}, 5000); // , х - параметр времени в милисекундах
----------------------------------

var i = 0;

var interval = setInterval(function () {
  console.log('setInterval ', + i++);
}, 1*1000); // , х - параметр времени в милисекундах

setTimeout(function() {                           // вызов функции один раз через х милисекунд
  console.log('setTimeout');
  clearInterval(interval);                        // остановит выполнение переменной
}, 5000);  // , х - параметр времени в милисекундах
======================================================

function run() {
  var i = 0;
  var counts = arguments.length;               // счетчик длинны аргументов

  for (; i < counts; i++) {
    arguments[i]();                             // это у нас функция
  }
}

run(function(a) {console.log(1); },
    function(b) {console.log(2); }
)
===========================================================

function loop(x) {
  if (x >= 10 ) {
    return;
  }
  console.log(x);
  loop(x + 1);
}

loop(1);
===============================================
                                // сложение всех чисел от передаваемого аргумента
function loop(x) {
  var sum = 0;

  if (x <= 0) {
    return 0;
  }

  return x + loop(x - 1);

}

console.log(loop(5));
==================================================
                               // Замыкание функции !!!!!!!!!!!!!!!!!!!!
function sum(x) {
  return function(y) {
    return x + y;
  };
}

console.log(sum(1));
console.log(sum(1)(2)); //3  // карринг !!!!!!!!!!!!!!!!!!!!!!!!!
====================================================

function l(a) {
  return function (arr) {
    var i = 0;
    var arrLength = arr.length;

    for (; i < arrLength; i++ ) {
    console.log(arr[i] * a);
    }
  };
}

console.log(l(2)([1, 2, 3, 4]));
========================================================

(function(x) {
  console.log(x);
  if (x > 0 ) {
    arguments.callee(--x);          // вызов функции самой себя аргументом arguments.callee
  }
})(5);
=========================================================
                                    // Замыкание функции !!!!!!!!!!!!!!!!!!!!
function sum(x) {
  var z = 5 + x;

  return function(y) {
    return x + y;
  };
}

var newFun = sum(2);
console.log(newFun(3));

console.log(sum(1));
console.log(sum(1)(3)); //3  // вызов каррингом !!!!!!!!!!!!!!!!!!!!!!!!!
====================================================
                                           // функция КОНСТРУКТОР
'use strict'
function f() {
  this.a = '1';
  this.b = '2';
}

var instance = new f();                    //new вызов функции конструктора
//var badInstance = f();              // this === window, здесь создалась глобальная переменная, а это плохо

console.log(instance);
console.log(instance.a);
console.log(a);

=====================================================
                                // ПРОТОТИПЫ
var animal = {
  run: true
};

var rabbit = {
  jumps: true,
  __proto__: animal
};

for (var x in rabbit) {               // вернуть все пропперти свойственные rabbit.
  if (rabbit.hasOwnProperty(x)) {    // вернуть только пропперти свойственные rabbit.
    console.log(x, rabbit[x]);
  }
}
console.log(animal.hasOwnProperty('run'));  // вернуть только пропперти свойственные animal.
----------------------------------------
                                         // косяки!!!!!!!! не работают наследование прототипов
function animal(say) {
  var a = 4;                               // приватная переменная, доступна только внутри function animal(say)

  this.say = function() {
    return say + a;
  };
  this.run = true;
}

function smartAnimal() {
  this.eat = function() {
    return 'om nom nom';
  },
  this.jump = function() {
    return 'oh ye';
  };
}

var tempFunc = function() {};
tempFunc.prototype = animal.prototype;
smartAnimal.prototype =  tempFunc.prototype;

var fish = new smartAnimal('bul-bul-bul');


var actions = {
  eat: function() {
    return 'om nom nom';
  },
  jump: function() {
    return 'oh ye';
  }
}

for (var key in actions) {
 animal.prototype[key] = actions[key];
}


var cat = new animal('meow');
var dog = new animal('wow');


console.log(cat.say(), cat.eat(), cat.run);
console.log(dog.say(), dog.eat(), dog.run);
console.log(fish);
console.log(fish.eat());
===============================================
                                                // Вызов функции с заданным КОНТЕКСТОМ!!!!
var f = function( {
  this.x = 5;        // window.x = 5   (*1)
    (function() {
      this.x = 3;    // window.x = 3   (*1)  и (*2 второй вывод в консоль)
    })();
    console.log(this.x);
};

var obj = {
  x: 4,
  m: function() {
    console.log(this.x);
  }
};

//f(); // 3  (*1)   отрабатывает как функция
//var a = new f(); // 5  (*2)   отрабатывает как обьект, игнорируя внутреннюю анонимную функцию
obj.m();  // 4
//var f2 = new obj.m(); // undefined  создаст обект из значения ключа m:, а там х не определена
obj.m.call({x:5});  // 5    перезаписывает контекст на заданный нами
======================================================
                                   // СОЗДАНИЕ НОВОГО КОНСТРУКТОРА, ОБЬЕКТОВ И ПЕРЕОПРЕДЕЛЕНИЕ ПРОТОТИПОВ
'use strict'

function Animal(name) {            //  так описывается функция конструктор
                                         //  она хранится и выполнится при *
  this.name = name;
  this.birthday = new Date();
}

Animal.prototype.say = function() {
  console.log(this.name);
};

Animal.prototype.getDayOfBirth = function() {
  console.log(this.name + ' : ' + this.birthday);
};

// var cat = new Animal('cat');         // * обьявлении ключа new
// var dog = new Animal('dog');        // * обьявлении ключа new

// console.log(cat);
// console.log(dog);

function Cat(name) {                     // arguments   Наследник от Animal
  Animal.apply(this, arguments);       // this   вызов конструктора Родителя на выполнение, первый параметр задает
}                                      // область видимости конструктора

var tempFunc = function () {};               // перенос прототипов от класса в новый обьект
tempFunc.prototype = Animal.prototype;       // используя временную переменную и перезаписью прототипов сначала в нее
Cat.prototype = new tempFunc();              // и перезаписью прототипов из нее в новый обьект

Cat.prototype.say = function(arg) {
  if (arg === undefined) {
  console.log('Cat name: ');
  Animal.prototype.say.apply(this, arguments);  // .apply - обращаемся к методу .say родителя Animal.prototype
  } else {
    console.log(arg);
  }
};

Cat.prototype.run = function() {              // добавляем новый метод в класс Cat
  console.log('run...');
};

function Dog () {                           // this   вызов конструктора Родителя на выполнение, первый параметр задает
  Animal.apply(this, arguments);           // область видимости конструктора
}

Dog.prototype = Object.create(Animal.prototype);    // перенос прототипов от класса в новый обьект с помощью метода Object.create

Dog.prototype.sit = function() {
  console.log('I am siting');
}

Dog.prototype.say = function(arg) {
  if (arg === undefined) {
  console.log('Dog name: ');
  Animal.prototype.say.apply(this, arguments);  // .apply - обращаемся к методу .say родителя Animal.prototype
  } else {
    console.log(arg);
  }
};


function BreedsCat () {
  Cat.apply(this, arguments);
}

BreedsCat.prototype = Object.create(Cat.prototype);

BreedsCat.prototype.sit = function() {
  console.log('I am siting too');
};

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
BreedsDog.prototype.run = function () {
  console.log('running....');
};

for (var key in breeds) {
  BreedsDog.prototype[key] = breeds[key];
}

var rex = new BreedsDog('Rex');
var fiona = new BreedsCat('Fiona');
var bobik = new Dog('Bobik');
var luna;
var mittens = new Cat('Mittens');

rex.getDayOfBirth();
rex.say();
rex.say('gav');
rex.run();
rex.sit();
rex.serve();

fiona.getDayOfBirth();
fiona.say('meow');
fiona.run();
fiona.sit();

bobik.getDayOfBirth();
bobik.say();
bobik.say('gav gav');
bobik.sit();

mittens.say();

setTimeout(function() {
  luna = new Cat('Luna');

  luna.getDayOfBirth();
  luna.say();
  luna.run();
}, 1000);

setTimeout(function() {
  luna.getDayOfBirth();
}, 2000);


=============================================================
                                                       // Home Work Наследование прототипов
'use strict';

function Animal(nameAnimal, voiceAnimal) {
  this.nameAnimal = nameAnimal;
  this.voiceAnimal = voiceAnimal;                 //??????????????????????????????
}

Animal.prototype.say = function() {
  console.log('I am animal - '+ this.nameAnimal);
};

Animal.prototype.voice = function(nameAnimal) {        //?????????????????????///
  console.log(this.voiceAnimal);
};




function Smarty(nameAnimal) {
  Animal.apply(this, arguments);
}

Smarty.prototype = Object.create(Animal.prototype);    // перенос прототипов от класса в новый обьект с помощью метода Object.create

Smarty.prototype.serve =  function() {
    console.log('I am Smarty animal - '+ this.nameAnimal + ' I like serve');
  };

Smarty.prototype.voice =  function() {
    console.log('I am Smarty animal - '+ this.nameAnimal + ' I have voice: ' + this.voiceAnimal);
  };




function Cat(name) {
  //this.voiceAnimal = "Myow-Myow!";
  Animal.call(this, name, "Myow-Myow!");
}

Cat.prototype = Object.create(Smarty.prototype);   // перенос прототипов от класса в новый обьект с помощью метода Object.create

Cat.prototype.say = function(arg) {
  if (arg === undefined) {
  console.log('Cat name: ' + this.nameAnimal);
  Animal.prototype.say.apply(this, arguments);  // .apply - обращаемся к методу .say родителя Animal.prototype
  } else {
    console.log(this.nameAnimal + ' say: ' + arg);
  }
};


Cat.prototype.run = function() {
  console.log(this.nameAnimal + ': I am quickly run!');
};

Cat.prototype.jump = function() {
  console.log(this.nameAnimal + ': I am jumping!');
};




function Dog() {
  Animal.apply(this, arguments);
  this.voiceAnimal = "Wow-Wow!";
}

Dog.prototype = Object.create(Smarty.prototype);

Dog.prototype.say = function(arg) {
  if (arg === undefined) {
  console.log('Dog name: ' + this.nameAnimal);
  Animal.prototype.say.apply(this, arguments);  // .apply - обращаемся к методу .say родителя Animal.prototype
  } else {
    console.log(this.nameAnimal + ' say: ' + arg);
  }
};

Dog.prototype.sit = function() {
  console.log(this.nameAnimal + ': I am sit!');
};

Dog.prototype.stand = function () {
  console.log(this.nameAnimal + ': I am stand!');
};


var cat = new Animal('Cat');
var dog = new Animal('Dog');
var fiona = new Cat('Fiona');
var diana = new Cat('Diana');
var rex = new Dog('Rex');


cat.say(); // cat

dog.say(); // dog

fiona.say(); // Fiona
fiona.say('Pyssy cat'); // Pyssy cat
fiona.serve();
fiona.voice();
fiona.run(); // I am running
fiona.jump();

diana.say();
diana.say('I am pyssy cat too');
diana.serve();
diana.voice();
diana.run();
diana.jump();


rex.say(); // Rex
rex.say('Pyssy dog'); // Pyssy dog
rex.serve(); // I am serving
rex.voice();
rex.sit(); // I am sitting
rex.stand();
=============================================================
*/                                                        // Home Work Наследование прототипов разбор в классе
//'use strict';

function declare(className, superClass, props) {
  if (typeof className !== 'string') {
    props = superClass;
    superClass = className;
    className =  undefined;
  }

  var classConstrucor = function() {},
      superClassLength,
      method;

      if (superClass !== null && superClass.length) {
        superClassLength = superClass.length;
      }

  if (typeof superClass === 'function') {
    classConstrucor.prototype = Object.create(superClass.prototype);

  } else if (typeof superClass === 'object' && superClassLength && superClassLength !== 0) {

    var i = 0,
        tempFunct = function() {};

    for (; i < superClassLength; i++) {
      for (method in superClass[i].prototype) {
        tempFunct.prototype[method] = superClass[i].prototype[method];
      }
    }

    classConstrucor.prototype = new tempFunct();
  }

  for (method in props) {
    classConstrucor.prototype[method] = props[method];
  }

  classConstrucor.prototype._className = className;

  classConstrucor.prototype.inherited = function(args) {
    // Animal.prototype.getName.apply(this, arguments);
    // superClass.prototype[arguments.callee.caller.name].apply(this, args);   Бок не работает
  };


if (className) {
  window[className] = classConstrucor;
} else {
  return classConstrucor;
}
}

declare('Animal', null, {
  name: 'Animal name',                          // если в ключе нет функции, она считается полем и вызывается как *
  say: function() { console.log('say'); },

  getName: function() {
    console.log(this.className + this.name);
  }

});



declare('Smarty', null, {
  serve: function() { console.log('I am serving'); }
});



declare('Cat', Animal, {
  run: function() { console.log('I am running'); },

  getName: function() {
    console.log('Cat: say');
    this.inherited(arguments);
  }
});



declare('Dog', [Animal, Smarty], {
  sit: function() { console.log('I am sitting'); }
});


(function() {
  var AnimalLocal = declare(null, {
    say: function() { console.log('local say'); }
  });

  var catLocal = new AnimalLocal();

  catLocal.say();
}) ();

var cat = new Animal();
var smarty = new Smarty();
var fiona = new Cat();
var rex = new Dog();


cat.say();
console.log(cat.name);  // * вызов поля

smarty.serve();

fiona.say();
fiona.run();
fiona.getName();
console.log(fiona.name);  // * вызов поля



rex.say();
rex.serve();
rex.sit();
/* =============================================================
                                              // Вывод максимального элемента в массиве
var array = [2, 4, 6, 3, 55, 3, 44, 23, 65],
    length = array.length,
    max = 0,
    i = 0;

for (; i < length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

console.log(max);
=============================================================
                                               // изменение координат обьекта
function Shape(name) {
  this.name = name;
  this.x = 0;
  this.y = 0;
}

Shape.prototype.getCords = function () {
  return {
    x: this.x,
    y: this.y
  };
};

Shape.prototype.setCords = function (a, b) {
    this.x = a ;
    this.y = b ;

};

Shape.prototype.getName = function () {
  return this.name;
};


var ball = new Shape('ball');

console.log(ball.getName());
console.log(ball.getCords());
ball.setCords(1, 1);
console.log(ball.getCords());
*/
