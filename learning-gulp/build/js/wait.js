$('html').removeClass("no-js");

$(window).load(function() {
    setTimeout(function(){
        $('html').addClass("loaded");
    }, 800);
});
