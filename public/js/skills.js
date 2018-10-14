var sections_animated = {
  "section-programming": 0,
  "section-web": 0,
  "section-others": 0
};

var isAllAnimated = false;

var skill_percent = {
  "section-programming": ["0%", "20%", "70%", "10%", "15%"],
  "section-web": ["10%", "20%", "20%", "0%"],
  "section-others": ["20%", "50%", "70%", "70%", "60%"]
};

function animate_skill_bar(id) {
  var bars = $("#"+id+" .skill-item .flex-bar");
  console.log(bars);
  for (var i = 0; i < bars.length; ++i) {
    $(bars[i]).css("background-position", skill_percent[id][i]+" 0");
  }

  sections_animated[id] = 1;
  if (sections_animated["section-programming"] &&
      sections_animated["section-web"] &&
      sections_animated["section-others"])
      isAllAnimated = true;

  if (isAllAnimated) {
    $(".section").unbind("mouseenter");
  }
}

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

// Continuously update the styles to fit the window size
$(window).on("resize", initialize_size);

$(".section").on("mouseenter", function() {
  animate_skill_bar($(this).attr("id"));
});
