  $('.scrollnav').hide();

$(window).scroll(function() {
  if ($(this).scrollTop() < 400) {
    $('.scrollnav').fadeOut()
  } else {
    $('.scrollnav').fadeIn();
  }
});
