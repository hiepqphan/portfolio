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

  $(".section-wrapper>.section>.inner").animate({width:0, opacity:0}, 500, "swing", function() {
    $(".section-wrapper").css({"position":"absolute", "width":"100%"});
    var sections = $(".section-wrapper>.section");
    for (var i = 0; i < sections.length; ++i) {
      $(sections[i]).animate({top:300+90*(sections.length-i-1), "margin-top":0});
    }

    var space = 10;
    var margin = ($(".content").width()-90*3-space*2)/2;
    for (var i = 0; i < sections.length; ++i) {
      $(sections[i]).animate({left:margin+90*i+space*i, "margin":0});
    }

    $(".details").show();
    $(".details").animate({opacity:1});
  });

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
  onDisplay = -1;
  createRipple(this, event, "black");
  window.setTimeout(function() {
    $(".ripple-circle").remove();
    $(".details").animate({opacity:0}, 300, "swing", function() {
      $(".details").hide();
    });
  }, 300);

  var sections = $(".section-wrapper>.section");
  var left = ($(".content").width()-450)/2;
  $(sections).animate({left:left}, function() {
    for (var i = 0; i < sections.length; ++i) {
      $(sections[i]).animate({top:50*i+100}, function(i) {
        $(this).children(".inner").animate({width:450-90}, function() {
          $(this).animate({opacity:1});
          $(".section-wrapper").attr({"style":"position=static"});

          window.setTimeout(function() {
            $(".section").attr({"style":""});
          }, 500);
        }, 0);
      });
    }
  });

});
