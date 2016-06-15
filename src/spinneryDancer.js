var spinneryDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$img = $('<img class="spinnery" src="http://rs1104.pbsrc.com/albums/h329/zorq1/Spinning-asteroid-1.gif~c200"/>');
  this.temp = Math.floor(Math.random() * 70);
  this.$img.css({height: '+=' + this.temp + 'px'});
  this.$node.append(this.$img);
  // this.setPosition(top, left);
  this.xFlag = true;
  this.yFlag = true;
};

spinneryDancer.prototype = Object.create(makeDancer.prototype);
spinneryDancer.prototype.constructor = spinneryDancer;


spinneryDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  console.log(window.innerWidth);
  if (this.xFlag) {
    this.$node.css({left: '-=' + this.temp + 'px'});
    if (this.$node.position().left < 5) {
      this.xFlag = false;
    }
  }

  if (!this.xFlag) {
    this.$node.css({left: '+=' + this.temp + 'px'});
    if (this.$node.position().left > window.innerWidth - 90) {
      this.xFlag = true;
    }
  }

  if (this.yFlag) {
    this.$node.css({top: '-=' + this.temp + 'px'});
    if (this.$node.position().top < 5) {
      this.yFlag = false;
    }
  }

  if (!this.yFlag) {
    this.$node.css({top: '+=' + this.temp + 'px'});
    if (this.$node.position().top > window.innerHeight - 90) {
      this.yFlag = true;
    }
  }

  //   if (this.$node.position().top < 40)

  
  // if (this.$node.position().left < 40) {

  // }
};
