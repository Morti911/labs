function Shape(name) {
  this.name = name;
  this.x = 0;
  this.y = 0;
}

Shape.prototype.getName = function() {
  return this.name;
};

Shape.prototype.getCords = function() {
  return {
    x: this.x,
    y: this.y
  };
};

Shape.prototype.setCords = function(x, y) {
  this.x = x;
  this.y = y;
};

var ball = new Shape('ball');
var ball22 = new Shape('ball22');

console.log(ball.getName());
console.log(ball.getCords());
ball.setCords(1,1);
ball22.setCords(22,22);
console.log(ball.getCords());
console.log(ball22.getCords());
