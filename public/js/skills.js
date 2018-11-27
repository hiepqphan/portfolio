var content = ['programming', 'web', 'others'];
var content_map = {'programming': 0,
                   'web': 1,
                   'others': 2};
var border_color = ['#26BDE6', '#F66E9D', '#7B75CF'];
var skills_color = [[4, 3, 0, 4, 3], [4,3,2,4], [3,3,2,0,2]];

function ready_handler() {
  var groups = $(".skill-group");
  for (var i = 0; i < groups.length; ++i)
  {
    var id = "#"+groups[i].id + " .proficiency-bar";
    var skills = $(id);
    for (var j = 0; j < skills.length; ++j)
    {
      $(skills[j]).css("background-color",pro_bar_colors[skills_color[content_map[groups[i].id]][j]]);
    }
  }

  $(".social-media").show();
}

$(document).ready(ready_handler);

// Events
$(".section-wrapper>.section").click(function (event) {
  var id = $(this).attr("display");
  onDisplay = content_map[id];
  $(".table-header").css("border-top-color", border_color[content_map[id]]);
  $(".table-header>div:first-child span").text(id.toUpperCase());
  for (var i = 0; i < 3; ++i)
    if (i == content_map[id]) {
      $("#"+content[i]).show();
    }
    else
      $("#"+content[i]).hide();

  $(".section-wrapper").animate({width:"toggle"}, 500, "swing", function() {
    $(".details").show();
    $(".details").animate({opacity:1});

    var minibarWidth = $(".section-mini-bar").width();
    $(".section-mini-bar").css("top", $("body").height()-300);
    $(".section-mini-bar").css("left", $("body").width()/2 - minibarWidth/2);
  });
});

$(".section-mini-bar .section").click(function() {
  var id = $(this).attr("display");
  nextDisplay = content_map[id];
  if (nextDisplay != onDisplay) {
    $("#"+content[onDisplay]).slideToggle();
    $(".table-header").css("border-top-color", border_color[nextDisplay]);
    $(".table-header>div:first-child span").text(content[nextDisplay].toUpperCase());
    $("#"+content[nextDisplay]).slideToggle();
    onDisplay = nextDisplay;
  }
});

$(".left-button").click(function () {
  var nextDisplay = onDisplay-1;
  if (nextDisplay == -1)
    nextDisplay = 2;
  $("#"+content[onDisplay]).slideToggle();
  $(".table-header").css("border-top-color", border_color[nextDisplay]);
  $(".table-header>div:first-child span").text(content[nextDisplay].toUpperCase());
  $("#"+content[nextDisplay]).slideToggle();
  onDisplay = nextDisplay;
});

$(".right-button").click(function () {
  var nextDisplay = onDisplay+1;
  if (nextDisplay == 3)
    nextDisplay = 0;
  $("#"+content[onDisplay]).slideToggle();
  $(".table-header").css("border-top-color", border_color[nextDisplay]);
  $(".table-header>div:first-child span").text(content[nextDisplay].toUpperCase());
  $("#"+content[nextDisplay]).slideToggle();
  onDisplay = nextDisplay;
});


$(".details .back-button button").click(function (event) {
  createRipple(this, event, "black");
  window.setTimeout(function() {
    $(".ripple-circle").remove();
    $(".details").animate({opacity:0}, 300, "swing", function() {
      $(".details").hide();
      $(".section-wrapper").animate({width:"toggle"}, 500, "swing");
    });
  }, 300);
});
