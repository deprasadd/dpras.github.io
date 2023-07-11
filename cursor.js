$(document).ready(function() {
    var cursorX = 0;
    var cursorY = 0;
  
    if (localStorage.getItem('cursorX') && localStorage.getItem('cursorY')) {
      cursorX = parseFloat(localStorage.getItem('cursorX'));
      cursorY = parseFloat(localStorage.getItem('cursorY'));
      $('.cursor').css({ left: cursorX, top: cursorY });
    }
  
    $(document).mousemove(function(event) {
      cursorX = event.pageX;
      cursorY = event.pageY;
      $('.cursor').css({ left: cursorX, top: cursorY });
    });
  
    $('.cursor').click(function(event) {
      event.stopPropagation();
    });
  
    $('a').mouseenter(function() {
      $('.cursor').addClass('focus');
    }).mouseleave(function() {
      $('.cursor').removeClass('focus');
    });
  
    $('a').click(function(event) {
      var activeLink = $(this).attr('href');
      localStorage.setItem('activeLink', activeLink);
      localStorage.setItem('cursorX', cursorX);
      localStorage.setItem('cursorY', cursorY);
    });
  
    // Check if there is an active link in localStorage and apply 'active' class
    var activeLink = localStorage.getItem('activeLink');
    if (activeLink) {
      $('a href="' + activeLink + '"').addClass('active');
    }
  });
  