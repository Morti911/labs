var _ = (function() {
  return {
    findKey: function(o, p) { /* object, predicate */
      var pType = typeof p,
          result,
          oKey,
          pKey;

      var addToResult = function(key) {
        if (typeof result !== 'object') {
          result = !result ? key : [result, key];
        } else {
          result.push(key);
        }
      };

      if (['string', 'number', 'undefined'].indexOf(pType) !== -1 || p === null) {
        for (oKey in o) {
          if (o.hasOwnProperty(oKey) && o[oKey] === p) {
            addToResult(oKey);
          }
        }
      } else if (pType === 'object') {
        for (oKey in o) {
          var isEqual = true;

          for (pKey in p) {
            if (!o[oKey].hasOwnProperty(pKey) || o[oKey][pKey] !== p[pKey]) {
              isEqual = false;
            }
          }

          isEqual && addToResult(oKey);
        }
      } else if (pType === 'function') {
        for (oKey in o) {
          if (o.hasOwnProperty(oKey) && p(o[oKey])) {
            addToResult(oKey);
          }
        }
      }

      return result;
    }
  };
})();

/*
var simpleObject = {
  a: 1,
  b: 2,
  c: 3,
  d: 'a',
  e: 'b',
  f: 3,
  g: undefined,
  h: null,
  i: 3
};

console.log( _.findKey(simpleObject, 2) ); // > 'b'
console.log( _.findKey(simpleObject, 3) ); // > ['c','f', 'i']
console.log( _.findKey(simpleObject, 'a') ); // > 'd'
console.log( _.findKey(simpleObject, undefined) ); // > 'g'
console.log( _.findKey(simpleObject, null) ); // > 'h'
*/


var users = {
  'barney':  { 'age': 36, 'active': true, 'comment': 'a' },
  'fred':    { 'age': 40, 'active': false, 'comment': 'b' },
  'pebbles': { 'age': 1,  'active': true, 'comment': 'c' },
  'nick':    { 'age': 1,  'active': true, 'comment': 'd' },
};

console.log( _.findKey(users, { 'age': 1, 'active': true, 'comment': 'd' }) ); // > nick
console.log( _.findKey(users, { 'age': 1, 'active': true }) ); // > ["pebbles", "nick"]
console.log( _.findKey(users, { 'active': true }) ); // > ["barney", "pebbles", "nick"]
console.log( _.findKey(users, { 'age': 40 }) ); // > 'fred'


console.log( _.findKey(users, function(o) { return o.age < 30; }) );
