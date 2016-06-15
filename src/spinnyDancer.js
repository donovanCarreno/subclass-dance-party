var spinnyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$img = $('<img class="spinny" src="http://ppt.wz51z.com/EC3/CD10/animations/transportation/sci_fi_space/space_rocket_ship_lc.gif"/>');
  this.$node.append(this.$img);
  // this.setPosition(top, left);
  this.checker = false;
};

spinnyDancer.prototype = Object.create(makeDancer.prototype);
spinnyDancer.prototype.constructor = spinnyDancer;


spinnyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  $(this.$node).addClass('spinny');
  // $('.spinny').keyup(function (e) {
  //     console.log(this, mover, this.$node);
  //   var mover = $('.spinny');
  //   if (e.keyCode === 37){
  //     $('.spinny').css({left: '-=10px'});
  //     // $(this.$node.offsetLeft) -= 10px);
  //   }
  //   if (e.keyCode === 38){
  //     $(this.$node).animate({top: '-10px'});
  //     console.log('up')
  //     //up
  //   }
  //   if (e.keyCode === 39){
  //     $(this.$node).animate({left: '+10px'});
  //     //right
  //   }
  //   if (e.keyCode === 40){
  //     $(this.$node).animate({top: '+10px'});
  //     // down
  //   }
  // });



  // this.$node.css({left: '-=30px'})
  // if (this.$node.position().left < 20) {
  //   this.$node.css({left: window.innerWidth}, 0);
  // }

};




// $('input').live('keypress', function (e) {
//    if ( e.which == 9 )
//        alert( 'Tab pressed' );
// });


  // console.log(window.innerWidth);
  // if (this.xFlag) {
  //   this.$node.css({left: '-=' + this.temp + 'px'});
  //   if (this.$node.position().left < 5) {
  //     this.xFlag = false;
  //   }
  // }

  // if (!this.xFlag) {
  //   this.$node.css({left: '+=' + this.temp + 'px'});
  //   if (this.$node.position().left > window.innerWidth - 90) {
  //     this.xFlag = true;
  //   }
  // }

  // if (this.yFlag) {
  //   this.$node.css({top: '-=' + this.temp + 'px'});
  //   if (this.$node.position().top < 5) {
  //     this.yFlag = false;
  //   }
  // }

  // if (!this.yFlag) {
  //   this.$node.css({top: '+=' + this.temp + 'px'});
  //   if (this.$node.position().top > window.innerHeight - 90) {
  //     this.yFlag = true;
  //   }
  // }