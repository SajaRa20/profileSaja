$(function (){
    'use strict' ;
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {

        $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();

    });

    // Click On Botton To Scroll Top 
    scrollButton.click(function () {
        $("html ,body").animate({ scrollTop: 0 }, 600);

    });
});

// $(".prog1").animate({
//     width: "100%"
// }, 2500);
// $(".prog2").animate({
//     width: "90%"
// }, 2500);
// $(".prog3").animate({
//     width: "70%"
// }, 2500);
// $(".prog4").animate({
//     width: "85%"
// }, 2500);
// $(".prog5").animate({
//     width: "100%"
// }, 2500);
// $(".prog6").animate({
//     width: "95%"
// }, 2500);
// $(".prog7").animate({
//     width: "100%"
// }, 2500);
// $(".prog8").animate({
//     width: "70%"
// }, 2500);

// SMOOTH SCROLL
    $(function() {
      $('.nav-link').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
          }, 1000);
            event.preventDefault();
      });
    });  