$(document).ready(function () {
    $('.slider_box').slick({
        arrows: false,
        dots: false,
        slidesToScroll: 1,
    });
    // var tam = $(window).width();

    // if (tam <= 769) {
    //     $('.slider_box').unslick();
    // }

    var div = document.getElementById('log');
    var textos = ['sites.', 'apps.', 'landing pages.', 'hotsites.', 'email marketings.', 'ecommerces.', 'sistemas.', 'apis.'];

    function escrever(str, done) {
        var char = str.split('').reverse();
        var typer = setInterval(function () {
            if (!char.length) {
                clearInterval(typer);
                return setTimeout(done, 500); // só para esperar um bocadinho
            }
            var next = char.pop();
            div.innerHTML += next;
        }, 100);
    }

    function limpar(done) {
        var char = div.innerHTML;
        var nr = char.length;
        var typer = setInterval(function () {
            if (nr-- == 0) {
                clearInterval(typer);
                return done();
            }
            div.innerHTML = char.slice(0, nr);
        }, 100);
    }

    function rodape(conteudos, el) {
        var atual = -1;
        function prox(cb) {
            if (atual < conteudos.length - 1) atual++;
            else atual = 0;
            var str = conteudos[atual];
            escrever(str, function () {
                limpar(prox);
            });
        }
        prox(prox);
    }
    rodape(textos);

    $(window).scroll(function () {
        var home = $('.home').outerHeight();
        var calc = home - 200;
        var circle = $('.circle').outerHeight();
        var description = $('.wrapper .content .studio .description').outerHeight();
        var box = $('.wrapper .content .studio .box').outerHeight();
        var anima_img = home + circle + description;
        if ($(this).scrollTop() > calc) {
            $('.menu ul li a').addClass('active');
            $('.menu ul li a.logo_menu').addClass('active');
        } else {
            $('.menu ul li a').removeClass('active');
            $('.menu ul li a.logo_menu').removeClass('active');
        }
        if ($(this).scrollTop() > anima_img) {
            $('.wrapper .content .studio .animed .animate .bg_animate').addClass('active');
        }
    });
});

// $(window).on('load', function () {
//     $(".loading").fadeOut("slow");
// });