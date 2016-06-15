$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancers.push(dancer);

    $('.targetObj').on('click', function() {
      $('.targetObj').animate({height: 0, width: 0}, 2000);

    });
    $('body').on('keypress',function (e) {
      if (e.keyCode === 97){//37
        $('.spinny').css({left: '-=10px'});
        if ($('.spinny').position().left < 10) {
          $('.spinny').css({left: window.innerWidth}, 0);
        }
      }
      if (e.keyCode === 119){
        $('.spinny').css({top: '-=10px'});
        if ($('.spinny').position().top < 10) {
          $('.spinny').css({top: window.innerHeight}, 0);
        }
      }
      if (e.keyCode === 115){
        $('.spinny').css({left: '+=10px'});
        if ($('.spinny').position().left > window.innerWidth - 10) {
          $('.spinny').css({left: 0}, 0);
        }
      }
      if (e.keyCode === 122){
        $('.spinny').css({top: '+=10px'});
        if ($('.spinny').position().top > window.innerHeight - 10) {
          $('.spinny').css({top: 0}, 0);
        }
      }

      //var location = (window.dancers[0][$node].left);
      console.log($('.spinny'));
      var moverX = $('.spinny')[1].x;
      var moverY = $('.spinny')[1].y;
      var sitterX = dancers[0].left;
      var sitterY = dancers[0].top;
      // console.log(moverX, moverY, sitterX, sitterY);
      if (moverX > (sitterX - 25) && moverX < (sitterX + 40) && 
          moverY > (sitterY - 25) && moverY < (sitterY + 40)) {
        $('body').addClass('enders');  
        $('.spinny').addClass('enders2');  
        $('.spinnery').addClass('enders2');     
        // $('.targetObj2').addClass('enders2');     
        $('.random1').addClass('enders2');     
      }
    });
  });

  $('.lineUpButton').on('click', function() {
    var maxTop = $('body').height() * 0.90;
    var topIncrement = maxTop / window.dancers.length;

    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp(topIncrement * i);
    }
  });

    //$(this).append('<a class="addDancerButton" data-dancer-maker-function-name="targetObj">Jupiter</a>');
  // $('body').on('click', function(e) {
    // if (checker) {
    //   console.log(e.clientX, e.clientY);
    //   var gub = e.clientX - 80;
    //   var gib = e.clientY - 80;
    //   //var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    //   //var dancerMakerFunction = window[dancerMakerFunctionName];
    //   var jup = new targetObj(gib, gub, Math.random() * 1000 );
    //   console.log(jup);
    //   $(jup.$node).addClass('targetObj2');
    //   $('body').append(jup.$node);
    //   dancers.push(jup);
    //   checker = false;
    // } else {
    // }
  // });

});

