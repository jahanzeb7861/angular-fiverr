$(document).ready(function() {
  
  // $('body').addClass('sb-active');
  $('.sidebar-toggler').click(function (e) { 
    e.preventDefault();
    $('body').toggleClass('sb-active');
    // $('.right-side *').toggleClass('d-none');
  });

});
