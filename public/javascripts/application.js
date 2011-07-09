(function($) {
  var cache = [];
  // Arguments are image paths relative to the current page.
  $.preLoadImages = function() {
    var args_len = arguments.length;
    for (var i = args_len; i--;) {
      var cacheImage = document.createElement('img');
      cacheImage.src = arguments[i];
      cache.push(cacheImage);
    }
  }
})(jQuery)

var current_position = 0;
var centered_logo_top = 0;

$(function(){


   $("#tweets").tweet({
       query: 'weareniki',
       join_text: false,
       avatar_size: 32,
       count: 12
   });

  $("#photos_section a").attr("rel", "gallery");
  $("#photos_section a").fancybox();

  prepareSectionSize();

  $("#content").css("opacity", 0);
  $("#promotion").css("opacity", 0);

  var logo_top = $("#logo").offset().top;
  centered_logo_top = logo_top - $(window).height()/2 + $("#logo").height()/2;
  $("#content").css("margin-top", (-1) * centered_logo_top )
  current_position = centered_logo_top * (-1);
  $("#wrapper").css('height', $(window).height());

  $("#logo a, a.scroll").click(function(){
    scrollTo($($(this).attr('href')));
    return false;
  });

  $("#back").css('left', $(window).width()/2+$("#content").width()/2);

  $("#back").click(function(){
    goToLogo();
    $(this).animate({opacity: 0}, {queue: false});
    return false;
  });

  jQuery.preLoadImages("/images/logo.png", "/images/news.png", "/images/show.png", "/images/info.png", "/images/music.png", "/images/videos.png", "/images/photos.png");

  setTimeout(function(){
    $("#content").animate({opacity: 1}, {duration: 4000, queue: false});
    blinkLogo(true);
  }, 1000);

  setTimeout(function(){
    $("#promotion").animate({opacity: 1}, {duration: 3000, queue: false});
  }, 2000);

  $("#promotion").mouseenter(function(){
    $(this).animate({right: 0, top: 21});
  });

  $("#promotion").mouseleave(function(){
    $(this).animate({right: -150, top: 0});
  });


});


function prepareSectionSize(){
  $(".section").each(function(index){
    if($(this).height() < $(window).height()){
      $(this).css('height', $(window).height() + "px");
    }
  });
}


function goToLogo(){
  $("#content").animate({'margin-top': ((-1) * centered_logo_top)}, {queue: false});
  $("#wrapper").css('height', $(window).height());
}

function scrollTo(element){

  var element_position =  $(element).offset().top - $("#content").offset().top;
  scrollToPosition(element_position);
  $("#wrapper").css('height', $(element).height());

}

function scrollToPosition(position){
  $("#content").animate({'margin-top': -position}, {queue: false});
  if(position > centered_logo_top){
    $("#back").css('top', 0);
    $("#back").css('bottom', "");
  }else{
    $("#back").css('top', "");
    $("#back").css('bottom', 0);
  }
  $("#back").animate({opacity: 1}, {queue: false});
}

function blinkLogo(state){
  if(state == true){
    setTimeout(function(){
      $("#logo_inside").css('opacity', 0.8)
      blinkLogo(false);
    }, Math.floor(Math.random() * 3000));
  }else{
    setTimeout(function(){
      $("#logo_inside").css('opacity', 1)
      blinkLogo(true);
    }, 80);
  }
}
