$(document).ready(function () {
    var title_one = $('.slider_home .item .title_one');
    var title_two = $('.slider_home .item .title_two');
    var title_three = $('.slider_home .item .title_three');

    $('.slider_home').slick({

    }).on('beforeChange', function (event, slick, currentSlide, nextSlide, prevSlide) {
        title_one.removeClass('animated fadeInDown');
        title_one.addClass('animated fadeInDown');
        console.log('entrou');

    });
});