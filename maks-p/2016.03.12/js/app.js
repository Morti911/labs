var string = 'string';//"string", new String()
var number = 4;//4.5 +, parseInt(), parseFloat()
var boolean = true; // true|false;
var un = undefined;
var nul = null;
var o = {}; // [], new Object()

//[] - Array
//{} - Object

var list = [1, 2, 3, 4, 5];

list.push(6); // add to the end
var last = list.pop(); // remove from the end
list.unshift(0); // add from start
list.shift(); // remove to start

delete list[2];// [1, 2, undefined, 4, 5];

list[7] = 8; //[1, 2, undefined, 4, 5, undefined, undefined, 8];

var removed = list.splice(2, 1);

var o = {
  one: 1,
  two: 2,
  three: 3,
  in: {
    inner: 'value'
  },
  five: 5
};
var a = 'one';

o.two // o['two'];
o.in.key // o['in']['key']

o[a]

if (a === 1) {

} else if (a === 2) {

} else {

}

switch (a) {
  case 1:

    break;
  case 2:

    break;
  default:
}

var key
for (key in o) {
  if (o.hasOwnProperty(key)) {
    console.log(key);
  }
}
var i = list.length;
(function() {

  for (; i > 0; i--) {
    if (list[i]) {
      console.log(list[i]);
    }
  }
})();

var a = (2 !== 1) ? 3 : 4; //3

var b = c || a; // 3
var d = c && b && a; //

if (c && b) {
  var d = a;
}

var array = [2,4,6,3,55,3,44,23,65];
var max = 0,
    i = 0,
    arrayLength = array.length;

for (; i < arrayLength; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

/*array.sort(function(a,b) {
  return b-a;
})

array[0];*/


Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

var maxElement = array.max();
//

function sum(a) {
  var summa = a;

  function innerSum(b) {
    summa += b;
    return innerSum;
  }

  innerSum.toString = function() {
    return summa;
  };

  return innerSum;
}

console.log(sum(1)(2));
console.log(sum(1)(2)(3)(4));
