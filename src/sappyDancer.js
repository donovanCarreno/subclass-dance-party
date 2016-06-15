var sappyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$img = $('<img class="random1" src="http://www.clipartbest.com/cliparts/bTy/7yL/bTy7yL8TL.gif"/>');
  this.$node.append(this.$img);
  // this.setPosition(top, left);
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