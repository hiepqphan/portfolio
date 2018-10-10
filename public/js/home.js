
function initialize_size() {

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
