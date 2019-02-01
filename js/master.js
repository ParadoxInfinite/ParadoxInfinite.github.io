$('h1').addClass('animated flash slow infinite');
$('body').keypress(function(e){
  if(e.keyCode==101||e.keyCode==69){
    $('body').addClass('bgani');
    $('h1').remove();
    $('#mainpage').addClass('shown');
    $('#mainpage').removeClass('hidden');
    $('#ac1').addClass('animated fadeInDown');
    $('#ac2').addClass('animated fadeInUp');
  }
});

$(document).keypress(function(e) {
    var pos = $(window).scrollTop();
    var speed = 1.5;
    var two = $('#two').scrollTop();
    var three = $('#three').scrollTop();

    if (e.keyCode == 70 || e.keyCode == 102) {
      $('#Ho,#Sk').removeClass('active');
      $('#Ed').addClass('active');
      var education = $('#education').position().top;
      var distance = Math.abs(pos + education);
      var scrollSpeed = distance * speed;
      $('html, body').animate({scrollTop : education}, 700);
    }
});
