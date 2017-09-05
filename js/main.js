(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });
  
})(jQuery); // End of use strict
var main = function(){
  function simpleDating(day,month,year){
    var init = new Date();
    init.setDate(day);
    init.setMonth(month);
    init.setFullYear(year);
    var today = new Date();
    var years = Math.floor((today-init)/(365.25 * 24 * 60 * 60 * 1000));
    if (years>=2){
      return years +' years';
    } else {
      var months = Math.floor(12*(today-init)/(365.25 * 24 * 60 * 60 * 1000))
      return months + ' months';
    }
  };
  $('#edad').text(simpleDating(25,4,1994));
  
};
$(document).ready(main());
function loadJSON(name){
  $.getJSON("./jsons/"+name+".json", function(data){
    $('#modal-title').text(data.title);
    $('#modal-description').text(data.description);
    $('#modal-img').attr('src',data.img);
    if(data.position !== undefined){ 
      $('#modal-position').text(data.position);
      $('#modal-position').parent().css("display","block");
    } else {
      $('#modal-position').parent().css("display","none");
    }
    $('#modal-date').text(data.dates);
    if(data.link!== undefined){
      $("#modal-li").css("display", "block");
      $("#modal-link").attr('href',data.link);
    } else {
      $("#modal-li").css("display", "none");
    }
  });
}