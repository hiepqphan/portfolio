var pro_bar_colors = ["#A8FB94", "#F9D45C", "#FFC65E", "#FF9B69", "#FF7773"];
var onDisplay = -1;

function initialize() {
  if (window.pageYOffset >= $(".content").offset().top - $(".content").height()/2) {
    $(".social-media .social-item").css({"margin-left":60});
  }
  else {
    $(".social-media .social-item").hide();
    $(".social-media .social-item").css({"margin-left":-60});
    $(".social-media .social-item").show();
  }

  $(".details").hide();
  $(".details").animate({opacity:0}, 0);
  $(".message p, .message button").hide();
  $(".message button").fadeIn(1000);
  $(".message p").slideDown(1000);
  $(".message p").animate({opacity:1}, 1000);

}

function createRipple(button, event, color) {
  var d = Math.max($(button).width()+35*2, $(button).height()+12*2);
  $(button).append("<div class='ripple-circle'></div>");
  $(".ripple-circle").css({width:d, height:d});

  console.log(event.clientY, $(button).offset().top);
  var top_pos = event.clientY;
  var left_pos = event.clientX - $(button).offset().left - d/2;
  $(".ripple-circle").css({top:"-70%", left:0});
  $(".ripple-circle").addClass("ripple-effect");
  if (color != "black") {
    $(".ripple-circle").css("background-color",color);
  }
}

// Initialization
initialize();
$(function () {
  $('[data-toggle="tooltip"]').tooltip({"background-color":"white"});
});

// Events
$(window).scroll(function() {
  if (window.pageYOffset >= $(".content").offset().top - $(".content").height()/2) {
    $(".social-media .social-item").css({"margin-left":60});
  }
  else {
    $(".social-media .social-item").css({"margin-left":-60});
  }
});

$(".message button").click(function() {
  $("html, body").animate({scrollTop: $(".content").offset().top}, 800);
});

$(".social-media a:first-child").click(function() {
  $("html, body").animate({scrollTop: $(".header").offset().top}, 800);
});
