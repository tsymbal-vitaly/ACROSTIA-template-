//  scrollSpy
jQuery(document).ready(function () {
    const nav = document.querySelector('.navlist');
    const navItems = nav.querySelectorAll('a');
    const sections = document.querySelectorAll('.scroll-section');

    function scrollSpy(e) {
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop) {
                let id = section.getAttribute('id');
                navItems.forEach(item => {
                    if (item.getAttribute('href').slice(1) === id) {
                        item.classList.add('is-active');
                    } else {
                        item.classList.remove('is-active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', scrollSpy);
});

  scroll
jQuery(document).ready(function() {
    $("#menu").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
});

//  Change the color of menu items


//  animated button
jQuery(document).ready(function () {

    var anchor = document.querySelectorAll('button');

[].forEach.call(anchor, function (anchor) {
        var open = false;
        anchor.onclick = function (event) {
            event.preventDefault();
            if (!open) {
                this.classList.add('close');
                open = true;
            } else {
                this.classList.remove('close');
                open = false;
            }
        }
    });
});

//  mobile menu toggle
jQuery(document).ready(function () {
    $('.navToggle').on('click', function () {
        $('.navlist').slideToggle(300, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    });
});

//  fixed header navbar
//jQuery(document).ready(function () {
//
//    var $menu = $("header");
//
//    $(window).scroll(function () {
//        if ($(this).scrollTop() > 300 && $menu.hasClass("default")) {
//            $menu.fadeOut('fast', function () {
//                $(this).removeClass("default")
//                    .addClass("fixed transbg")
//                    .fadeIn('fast');
//            });
//        } else if ($(this).scrollTop() <= 300 && $menu.hasClass("fixed")) {
//            $menu.fadeOut('fast', function () {
//                $(this).removeClass("fixed transbg")
//                    .addClass("default")
//                    .fadeIn('fast');
//            });
//        }
//    });
//});

//  carousel-vision
jQuery(document).ready(function () {
    $('.carousel').slick({
        arrows: true,
        prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        dots: true
    });
});

//  tabs
jQuery(document).ready(function () {
    $(".tab-item").not(":first").hide();
    $(".wrap-tabs .tab").click(function () {
        $(".wrap-tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
});

//  gallery work
jQuery(document).ready(function () {
    $('.image-popup-fit-width').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: false
        }
    });
});

//  opacity overlay
jQuery(document).ready(function () {
    $('.overlay').each(function () {
        $(this).animate({
            opacity: '0'
        }, 1);
        $(this).mouseover(function () {
            $(this).stop().animate({
                opacity: '1'
            }, 300);
        });
        $(this).mouseout(function () {
            $(this).stop().animate({
                opacity: '0'
            }, 300);
        });
    });
});
