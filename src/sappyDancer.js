var sappyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.checker = false;
};

sappyDancer.prototype = Object.create(makeDancer.prototype);
sappyDancer.prototype.constructor = spinnyDancer;


sappyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  if (this.checker) {
   this.$node.addClass('sappy');
   this.checker = false;
  } else {
   this.$node.removeClass('sappy');
   this.checker = true;
  }
};