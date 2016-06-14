var spinneryDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="spinnery" src="http://www.thetaxidermystore.com/media/catalog/product/cache/1/small_image/64x/9df78eab33525d08d6e5fb8d27136e95/k/u/kudu-skull-horns-european-mount-_13748-for-sale-at-the-taxidermy-store.jpg"/>')
  this.setPosition(top, left)
  this.checker = false;
};

spinneryDancer.prototype = Object.create(makeDancer.prototype);
spinneryDancer.prototype.constructor = spinneryDancer;


spinneryDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  if (this.checker) {
   this.$node.addClass('sizer');
   this.checker = false;
  } else {
   this.$node.removeClass('sizer');
   this.checker = true;
  }
};
