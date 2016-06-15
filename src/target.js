var targetObj = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$img = $('<img class="targetObj" src="http://starryskies.com/solar_system/Jupiter/Tjupiter01.gif"/>');
  this.$node.append(this.$img);
};

targetObj.prototype = Object.create(makeDancer.prototype);
targetObj.prototype.constructor = targetObj;