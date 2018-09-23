var header = document.getElementById("cover-img");
var sidemenu = document.getElementById("side-menu-container");
var header_toppos = header.offsetTop;

$(window).scroll(function() {
	if (window.pageYOffset >= 100) {
		sidemenu.classList.add("sticky");
		$("#side-menu li a").css('margin-left','-45px');
	}
	else {
		sidemenu.classList.remove("sticky");
		$("#side-menu li a").css('margin-left','-100px');
	}
});

$('#button-down-button, .navbar-left .menu-left').click(function() {
	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 500);
});
