$(function(){

  $.localScroll({
  });

  var logo_top=$(".logo").offset().top;
  var scroll_to = logo_top - $(window).height()/2 + $('.logo').height()/2;
  $("#content").css("opacity", 0);

  setTimeout(function(){
    $(document).scrollTo(scroll_to);
  }, 1000);

  setTimeout(function(){
    $("#content").animate({opacity: 1}, {duration: 3000, easing: 'swing'});
  }, 1200);

});
