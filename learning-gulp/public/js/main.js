var sidebar = $('.sidebar'),
    sidebarPos = sidebar.offset();

$('html').removeClass('no-js');

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > parseFloat(sidebarPos.top - 10)){
        sidebar.addClass('attach');
    } else{
        sidebar.removeClass('attach');
    }
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$('html').removeClass("no-js");

$(window).load(function() {
    setTimeout(function(){
        $('html').addClass("loaded");
    }, 800);
});
