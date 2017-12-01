$('#button-down-button, .navbar-left .menu-left').click(function() {
	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 500);
});