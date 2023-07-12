$(document).ready(function() {
    $(".nav-link").click(function(e) {
      e.preventDefault();
      const page = $(this).data("page");
      switchPage(page);
    });
  
    const initialPage = window.location.hash.substr(1);
    loadPage(initialPage);
  });
  
  function switchPage(page) {
    window.location.hash = page;
  }
  
  function loadPage(page) {
    $("#content").load(page + ".html");
  }