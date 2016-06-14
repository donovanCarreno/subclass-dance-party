var spinnyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.checker = false;
};

spinnyDancer.prototype = Object.create(makeDancer.prototype);
spinnyDancer.prototype.constructor = spinnyDancer;


spinnyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  if (this.checker) {
   this.$node.addClass('sizer');
   this.checker = false;
  } else {
   this.$node.removeClass('sizer');
   this.checker = true;
  }
};





// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   makeDancer.call(this, top, left, timeBetweenSteps);
//     // this.oldStep = this.step;

// };

// makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

// makeBlinkyDancer.prototype.step = function() {
//   //call original step function with 'this'
//   makeDancer.prototype.step.call(this);
//   //toggle span tag
//   //console.log('now: ', this);
//   // console.log('fundsfsdf');

//   // console.log('just before toggle: ', this.$node);
//   this.$node.toggle();
// };