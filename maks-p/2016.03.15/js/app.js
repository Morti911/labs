function update(id, funct) {
  var ulNode = document.getElementById(id),
      liNodes = ulNode.getElementsByTagName('li'),
      liNodesLength = liNodes.length,
      i = 0;

  for (; i < liNodesLength;i++) {
    liNodes[i].innerHTML = funct(liNodes[i].innerHTML);
  }
}

/*var _ = function() {
  return {
    findKey: function(object, value) {
      return ;
    }
  };
};
var o = {
  a: 1,
  b: 2,
  c: 3,
  d: 'a',
  f: 'b',
  e: 3
};

_.findKey(o, 2); // 'b'
_.findKey(o, 3); // ['c', 'e']
_.findKey(o, 'a'); // 'd'

for (var i = 0; i < 5; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j);
    }, 500);
  })(i);
}
*/
