var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.setPosition(this.top, this.left);
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
};

makeDancer.prototype.step = function() {

  var curThis = this;
  this.step.bind(this)
  setTimeout(function() {
    curThis.step();
  }, this.timeBetweenSteps);
};



makeDancer.prototype.setPosition = function() {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(top) {
  //var horizontalDist = 50 - this.left;
  this.prevLeft = this.left;
  this.prevTop = this.top;
  this.$node.animate({left: 50, top: top}, 2000);
  //this.left += horizontalDist;
};