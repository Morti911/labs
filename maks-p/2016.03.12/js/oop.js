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

console.log(ball.getName());
console.log(ball.getCords());
ball.setCords(1,1);
console.log(ball.getCords());
