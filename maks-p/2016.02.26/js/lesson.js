(function(x) {
  console.log(x);
  if (x > 0) {arguments.callee(--x);}
})(5);


function m(a) { //a=2
  return function(arr) {
    var i = 0,
        arrLength = arr.length;

    for (; i < arrLength;i++) {
      arr[i] *= a;
    }

    return arr;
  }
}

console.log(m(2)([1,2,3,4])); // 2, 4, 6, 8
console.log(m(3)([1,2,3,4])); // 3, 6, 9, 12

function l(a) {
  return function(arr) {
    var i = 0,
        arrLength = arr.length;

    for (; i < arrLength;i++) {
      console.log(a * arr[i]);
    }

  };
}

l(2)([1,2,3,4]); // 2, 4, 6, 8
l(3)([1,2,3,4]); // 3, 6, 9, 12

*/

/*function sum(x) {
    var z = 5+x;

    return function(y) {
       return z+y;
    };
}

var newFun = sum(2);

console.log(newFun(2)); //9

console.log(sum(1));
console.log( sum(1)(2) ); //3
*/
/*
function loop(x) {
  if (x <=0 ) {return 0; }
  return x + loop(x - 1);
}

console.log(loop(5)); //5+4+3+2+1 = 15
*/
/*function loop(x) {
  if (x >= 10 ) { return; }
  console.log(x);
  loop(x + 1);
}

loop(1);
*/
/*function run(a,b,c) { // [function() { console.log(1); },]
  var i = 0,
      counts = arguments.length;

  for(; i<counts; i++) {
    arguments[i](); //(function() { console.log(1); })()
  }
}

run(
  function() { console.log(1); },
  function() { console.log(2); },
  1
);*/

//1
//2

/*var i = 0;

var interval = setInterval(function() {
  console.log('setInterval ' + i++);
}, 1*1000);

setTimeout(function() {

  clearInterval(interval);

}, 5000);
*/
/*var operations = {
  plus: function(a,b) { return a+b; },
  minus: function(a,b) { return a-b; },
  inc: function(a) { return ++a },
  dec: function(a) { return --a;}
};

console.log(operations.plus(3,4)); // 7
console.log(operations['minus'](5,4)); // 1
console.log(operations.inc(5)); // 6
console.log(operations.dec(9)); //8
*/
/*function sum(x,y) {
  return x+y;
}

//console.log(sum(1,2));

var sum1 = function() { //arguments
  // arguments [1,2,3,4]
  var result = 0,
      i = 0,
      counts = arguments.length;

  for(; i<counts; i++) {
    result += arguments[i];
  }

  return result;
};

var summ1 = sum1(1,2);
var summ2 = sum1(2,2,3,4);
var summ3 = sum1(10,11,3,4,5,6,7);

console.log(summ1);
console.log(summ2);
console.log(summ3);
*/
