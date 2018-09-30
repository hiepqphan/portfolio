// var header = document.getElementById("cover-img");
// var sidemenu = document.getElementById("side-menu-container");
// var header_toppos = header.offsetTop;
//
// $(window).scroll(function() {
// 	if (window.pageYOffset >= 100) {
// 		sidemenu.classList.add("sticky");
// 		$("#side-menu li a").css('margin-left','-45px');
// 	}
// 	else {
// 		sidemenu.classList.remove("sticky");
// 		$("#side-menu li a").css('margin-left','-100px');
// 	}
// });
//
// $('.menu-left, #side-menu a').click(function() {
// 	$('html, body').animate({
// 		scrollTop: $($(this).attr('href')).offset().top
// 	}, 500);
// });

// ----- Initialize -----
// Make sure styles are correct when page is loaded
if ($(window).width() < 992) {
  $("#navbarSupportedContent ul:first-child").removeClass("side-border nav-left fixed-width mr-auto");
  $("#navbarSupportedContent ul:nth-child(2)").removeClass("nav-right ml-auto");
  $(".nav-right").hide();
}
else {
  $("#navbarSupportedContent ul:first-child").addClass("side-border nav-left fixed-width mr-auto");
  $("#navbarSupportedContent ul:nth-child(2)").addClass("nav-right ml-auto");
};

$(".details").hide();
$(".details div").hide();

// Continuously update the styles to fit the window size
$(window).on("resize", function() {
  if ($(window).width() < 992) {
    $("#navbarSupportedContent ul:first-child").removeClass("side-border nav-left fixed-width mr-auto");
    $("#navbarSupportedContent ul:nth-child(2)").removeClass("nav-right ml-auto");
    $(".nav-right").hide();
  }
  else {
    $("#navbarSupportedContent ul:first-child").addClass("side-border nav-left fixed-width mr-auto");
    $("#navbarSupportedContent ul:nth-child(2)").addClass("nav-right ml-auto");
  };
});

// Show/hide details of experience section
var isShown = -1;
var last_clicked = -1;
var details = $(".details div");
var experiences = $(".section-experience .row div");
experiences.on("click", function() {
  if (isShown == -1) {
    $(".details").slideDown(20);
    isShown = 1;
  }

  var id = $(this).attr("id");
  var clicked = -1;

  if (id == "div-research")
    clicked = 0;
  else if (id == "div-contest")
    clicked = 1;
  else if (id == "div-work")
    clicked = 2;

  for (var i = 0; i < 3; ++i) {
    if (clicked == i) {
      $(details[i]).slideDown();
      $(experiences[i]).addClass("background-change-color");
    }
    else {
      $(details[i]).slideUp();
      $(experiences[i]).removeClass("background-change-color");
    }
  }

  if (!isShown) {
    $(".details").slideToggle();
    isShown = 1;
  }
  else if (last_clicked == clicked) {
    $(".details").slideToggle();
    $(experiences[clicked]).removeClass("background-change-color");
    isShown = 0;
  }
  last_clicked = clicked;
});

//  Smooth-scroll for navbar links
$(".dropdown-menu a").on("click", function() {
  var id = $(this).attr("id");
  var section = id.slice(4,id.length);
  section = ".section".concat(section);

  $('html, body').animate({
    scrollTop: $(section).offset().top-40
  }, 500);
});
