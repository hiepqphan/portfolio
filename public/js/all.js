var pro_bar_colors = ["#A8FB94", "#F9D45C", "#FFC65E", "#FF9B69", "#FF7773"];
var onDisplay = -1;

function initialize() {
  $(".social-media .social-item").hide();

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

  var top_pos = event.clientY;
  var left_pos = event.clientX - $(button).offset().left - d/2;
  $(".ripple-circle").css({top:"-70%", left:0});
  $(".ripple-circle").addClass("ripple-effect");
  if (color != "black") {
    $(".ripple-circle").css("background-color",color);
  }
}

function adjustSize() {
  var headeritems = $(".header .item");

  if ($(window).width() < 1700) {
    $(".hideable").hide();
    
    if ($(window).width() < 1000) {
      $(".message").css({"padding-top":"25%", "padding-left":"23%"});
      $(".white-border-bottom").css("border-bottom", "solid 2px #bafffd");
      for (var i = 0; i < 3; ++i){
        if ($(headeritems[i]).css("background-color") != "rgba(0, 0, 0, 0)") {
          $(headeritems[i]).css("background-color", "#bafffd");
        }}

      $(".nav-bar-custom .item:nth-child(2)").css({"margin-left":"5%"});
      $(".avatar img").css("width", 150);
      $("#bibliography").css({width:500, "font-size":20});
    }
    else {
      $(".message").css({"padding-top":"20%", "padding-left":"20%"});
      $(".white-border-bottom").css("border-bottom", "solid 2px white");
      for (var i = 0; i < 3; ++i){
        if ($(headeritems[i]).css("background-color") != "rgba(0, 0, 0, 0)") {
          $(headeritems[i]).css("background-color", "white");
        }}

      $(".nav-bar-custom .item:nth-child(2)").css({"margin-left":"15%"});
      $(".avatar img").css("width", 200);
      $("#bibliography").css({width:700, "font-size":22});
    }

    $("#programming .table-row:last-child>div:first-child div").text("OOP");
    $("#others .table-row:nth-child(3)>div:first-child div").text("UE4");
    $("#others .table-row:nth-child(4)>div:first-child div").text("Android");
    $(".back-button button").css("margin-left", 100);
  }
  else {
    $("hideable").show();
    $(".message").css("padding-top", "16%");

    $(".avatar img").css("width", 300);
    $("#bibliography").css({width:800, "font-size":25});

    $(".nav-bar-custom .item:nth-child(2)").css({"margin-left":"30%"});
    $("#programming .table-row:last-child>div:first-child div").text("Object-oriented programming");
    $("#others .table-row:nth-child(3)>div:first-child div").text("Unreal Engine 4");
    $("#others .table-row:nth-child(4)>div:first-child div").text("Android Development");
    $(".back-button button").css("margin-left", 300);
  }

  if ($(window).height() < 800) {
    $(".table-header, .table-row").css({height: 40});
    $(".table-header>div:first-child").css({"margin-top":1});
    $(".table-header>div:nth-child(2)").css({"margin-top":4});
    $(".table-row>div:first-child").css({"margin-top":10});
    $(".proficiency-bar").css({"margin-top":18});

    if ($(window).height() < 500) {
        $(".message").css({"padding-top":"16%"});
        $(".content .title").css({"padding-top":30});

        $("#bibliography").css({"font-size":15});

        if (onDisplay == -1) {
          $(".section-wrapper .section").css({"margin-top":5});
          $(".section-wrapper .section:first-child").css({"margin-top":10});
        }
        $(".back-button").hide();
        $(".table").css({"margin-top":10});

        $(".social-media").css({top:100});
        $(".display-area").css({height: "50%"});
        $(".content-area").css({height: "75%", "margin-top":"20px"});
        $(".menu-bar").css({width:70});
        $(".menu-bar .menu-item").css({height:70, "font-size":10});
        $(".menu-bar .menu-item>p:first-child").css({"font-size":20, "padding-top":10, "margin-bottom":0});
        $(".menu-bar .menu-item:nth-child(2)>p:first-child").css({"padding-top":7});
        $(".sub-title, .sub-content").css({"font-size":15});
        $(".date").css({"font-size":9});
    }
    else {
        $(".social-media").css({top:200});
        $(".message").css({"padding-top":"14%"});
        $(".content .title").css({"padding-top":60});

        $("#bibliography").css({"font-size":20});

        if (onDisplay == -1) {
          $(".section-wrapper .section").css({"margin-top":25});
          $(".section-wrapper .section:first-child").css({"margin-top":50});
        }
        $(".back-button").show();
        $(".table").css({"margin-top":0});

        $(".display-area").css({height: "60%"});
        $(".content-area").css({height: "80%", "margin-top":"20px"});
        $(".menu-bar").css({width:90});
        $(".menu-bar .menu-item").css({height:90, "font-size":13});
        $(".menu-bar .menu-item>p:first-child").css({"font-size":25, "padding-top":15, "margin-bottom":0});
        $(".menu-bar .menu-item:nth-child(2)>p:first-child").css({"padding-top":10});
        $(".sub-title, .sub-content").css({"font-size":16});
        $(".date").css({"font-size":11});
    }

  }
  else {
    $(".social-media").css({top:300});
    $(".content .title").css({"padding-top":80});

    if (onDisplay == -1) {
      $(".section-wrapper .section").css({"margin-top":50});
      $(".section-wrapper .section:first-child").css({"margin-top":100});
    }

    $("#bibliography").css({height:"70%"});
    if ($(window).height() < 1000) {
      $("#bibliography").css({"font-size":20});
    }
    else {
      $("#bibliography").css({"font-size":25});
    }

    $(".table-header, .table-row").css({height: 50});
    $(".table-header>div:first-child").css({"margin-top":7});
    $(".table-header>div:nth-child(2)").css({"margin-top":9});
    $(".table-row>div:first-child").css({"margin-top":14});
    $(".proficiency-bar").css({"margin-top":22});

    $(".display-area").css({height: "70%"});
    $(".content-area").css({height: "85%", "margin-top":"50px"});
    $(".menu-bar").css({width:170});
    $(".menu-bar .menu-item").css({height:170, "font-size":20});
    $(".menu-bar .menu-item>p:first-child").css({"font-size":40, "padding-top":30, "margin-bottom":0});
    $(".menu-bar .menu-item:nth-child(2)>p:first-child").css({"padding-top":25});
    $(".sub-title, .sub-content").css({"font-size":20});
    $(".date").css({"font-size":14});
  }
}

// Initialization
initialize();
adjustSize();
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

$(window).resize(function() {
  if (onDisplay != -1) {
    var space = 10;
    var margin = ($(".content").width()-90*3-space*2)/2;
    var sections = $(".section-wrapper>.section");
    var base = 300;
    if ($(window).height() < 500)
      base = 80;
    else if ($(window).height() < 800)
      base = 140;
    for (var i = 0; i < sections.length; ++i) {
        $(sections[i]).css({left:margin+90*i+space*i});
        $(sections[i]).css({top:base+90*(sections.length-i-1), "margin-top":0});
    }
  }

  adjustSize();
});

$(".message button").click(function() {
  $("html, body").animate({scrollTop: $(".content").offset().top}, 800);
});

$(".social-media a:first-child").click(function() {
  $("html, body").animate({scrollTop: $(".header").offset().top}, 800);
});
