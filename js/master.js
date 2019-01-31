$('h1').addClass('animated flash slow infinite')
$('body').keypress(function(e){
  if(e.keyCode==101||e.keyCode==69){
    $('h1').addClass('hidden');
    $('body').addClass('shown bgani');
    $('#mainpage').removeClass('hidden');
    $('#ac1').addClass('animated fadeInDown');
    $('#ac2').addClass('animated fadeInUp');
  }
})
