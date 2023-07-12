$(document).ready(function() {
  // Initialize cursor position variables
  var mouseX = 0;
  var mouseY = 0;

  // Update cursor position matching OS cursor on mousemove
  $(window).mousemove(function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    $('.cursor').css({
      left: mouseX,
      top: mouseY
    });
  });

  // Update cursor position when the document is clicked
  $(document).on('click', function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  // Add 'focus' class on link hover
  $('a').on('mouseenter', function() {
    $('.cursor').addClass('focus');
  }).on('mouseleave', function() {
    $('.cursor').removeClass('focus');
  });

  // Set initial cursor position on page load
  $('.cursor').css({
    left: mouseX,
    top: mouseY
  });
});
