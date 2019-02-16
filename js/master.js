$('h1').addClass('animated flash slow infinite');
$('.nav-item').click(function(){
  $('.nav-item').removeClass('active');
  $(this).addClass('active');
});
$('.navbar-brand').click(function(){
  $('.nav-item').removeClass('active');
  $('#Home').addClass('active');
});
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

    if (e.keyCode == 70 || e.keyCode == 102) {
      $('#Home,#Ski').removeClass('active');
      $('#Edu').addClass('active');
      var education = $('#education').position().top;
      var distance = Math.abs(pos + education);
      if(distance!=0) {$('html, body').animate({scrollTop : education}, 800);}
    }
    if (e.keyCode == 81 || e.keyCode == 113) {
      $('#Home,#Edu').removeClass('active');
      $('#Ski').addClass('active');
      var skills = $('#skills').position().top;
      var distance = Math.abs(pos + skills);
      if(distance!=0){$('html, body').animate({scrollTop : skills}, 800);}
    }
    if (e.keyCode == 82 || e.keyCode == 114) {
      $('#Edu,#Ski').removeClass('active');
      $('#Home').addClass('active');
      var home = $('#mainpage').position().top;
      var distance = Math.abs(pos + home);
      if(distance!=0){$('html, body').animate({scrollTop : home}, 800);}
    }
});
