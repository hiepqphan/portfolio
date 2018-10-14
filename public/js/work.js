
function initialize_size() {
  // Adjust footer's width
  $("#footer .row").css("width",$(window).width());
}

// ----- Initialize -----

// Make sure styles are correct when page is loaded
initialize_size();

// Enable tooltips everywhere
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(".details").hide();
$(".details div").hide();

// Continuously update the styles to fit the window size
$(window).on("resize", initialize_size);

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

//  Smooth-scroll for navbar links and footer
$(".dropdown-menu a,#footer p[section]").on("click", function() {
  var id = $(this).attr("section");
  var section = id.slice(4,id.length);
  section = ".section".concat(section);

  $('html, body').animate({
    scrollTop: $(section).offset().top-40
  }, 500);
});
// Enlarge cards on hover
$(".section-experience .row div").on("mouseenter", function() {
  $(this).animate({"margin-top":"-=10", "margin-bottom":"-=10", height:"+=20"}, 50);
  $(this).addClass("shadow-lg");
});

$(".section-experience .row div").on("mouseleave", function() {
  $(this).animate({"margin-top":"+=10", "margin-bottom":"+=10", height:"-=20"}, 50);
  $(this).removeClass("shadow-lg");
});
