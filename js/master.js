$("#a,#e,#c").click(function(){
  $("li").removeClass("active");
  $(this).toggleClass("active");
});
$("h2,img").click(function(){
  $("li").removeClass("active");
})
