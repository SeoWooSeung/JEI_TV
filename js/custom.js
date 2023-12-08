$(function () {
    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        dots: true,
        fade: true,
        cssEase: 'ease-in-out'
    });
    $('.right_main_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        dots: true,
        fade: true
    });

    $('.main_visual .arrows .left').on('click', function () {
        //슬라이드가 뒤로 가 : slick 홈페이지 참조
        $('.main_slide').slick('slickPrev')
    });

    $('.main_visual .arrows .right').on('click', function () {
        //슬라이드가 뒤로 가 : slick 홈페이지 참조
        $('.main_slide').slick('slickNext')
    });

    $('.right_slide .arrows .left').on('click', function () {
        //슬라이드가 뒤로 가 : slick 홈페이지 참조
        $('.right_main_slide').slick('slickPrev')
    });

    $('.right_slide .arrows .right').on('click', function () {
        //슬라이드가 뒤로 가 : slick 홈페이지 참조
        $('.right_main_slide').slick('slickNext')
    });

    $('.totop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 800)
    });

    $('.tobottom').on('click', function () {
        $('html, body').animate({ scrollTop: 2000 }, 800)
    });

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        if (sct > 0) {
            $('.totop').addClass('on');
            $('.Header').addClass('on');
        } else {
            $('.totop').removeClass('on')
            $('.Header').removeClass('on')
        }
    });

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        if (sct > 0) {
            $('.tobottom').addClass('on');
            $('.footer').addClass('on');
        } else {
            $('.tobottom').removeClass('on')
            $('.footer').removeClass('on')
        }
    });

    $(function () {
        $('.close').on('click', function () {
            $('.popup').hide();
        });
    })

    $(function () {
        $('.mopen').on('click', function () {
            $('.gnb').toggleClass('on');
            $(this).toggleClass('on');
        })
    })

    // alert('주의! 보다보면 배고플수 있음 !')

});