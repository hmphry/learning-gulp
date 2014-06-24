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
