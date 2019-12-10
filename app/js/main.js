$(document).ready(function () {
    var title_one = $('.slider_home .item .title_one');
    var title_two = $('.slider_home .item .title_two');
    var title_three = $('.slider_home .item .title_three');

    $('.slider_home').slick({
        autoplay: true,
        autoplaySpeed: 3500,
        speed: 1500,

    });
    $('.slider_contact').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1500,
    });
    $(".bar").click(function () {
        $("#menu_bar").addClass('active');
        $("#mask").addClass('active');
    });
    $("#mask").click(function () {
        $("#menu_bar").removeClass('active');
        $("#mask").removeClass('active');
    });
    $(".close").click(function () {
        $("#menu_bar").removeClass('active');
        $("#mask").removeClass('active');
    });
    $(".bar_mobile").click(function () {
        $(".menu").addClass('active');
    });
    $(".close_menu").click(function () {
        $(".menu").removeClass('active');
    });

});