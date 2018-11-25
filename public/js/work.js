var content = ['research', 'contest', 'related'];
var content_map = {'research': 0,
                   'contest': 1,
                   'related': 2};
var border_color = ['#ffbe70', '#42b3ff', '#ce73cd'];
var onDisplay = 0;

function initialize_work() {
  var height = $(".menu-bar .menu-item").width();
  $(".menu-bar .menu-item").height(height);

  var width = $(".display-area").width() - height - 100;
  $(".content-area").width(width);
  $(".content-area").css("border-top-color", border_color[0]);
  $(".menu-bar .menu-item:first-child").css({"background-color":border_color[0], color:"white"});
  $("#contest").hide();
  $("#related").hide();
}

// Initialization
initialize_work();

// Events
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(window).on("resize", function() {
  initialize_work();
});

$(".menu-bar .menu-item").click(function() {
  var id = $(this).attr("display");
  var id_num = content_map[id];

  if (id_num != onDisplay) {
    for (var i = 0; i < 3; ++i) {
      if (i == id_num) {
        $(".content-area").css("border-top-color", border_color[i]);
        $(".menu-bar .menu-item:nth-child("+(i+1)+")").css({"background-color":border_color[i], color:"white"});
        $("#"+id).slideDown();
      }
      else {
        $(".menu-bar .menu-item:nth-child("+(i+1)+")").css({"background-color":"white", color:"inherit"});
        $("#"+content[i]).slideUp();
      }
    }
    onDisplay = id_num;
  }
});
