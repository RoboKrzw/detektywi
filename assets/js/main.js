(function ($) {
    "use strict";
    $(document).ready(function () {

        // Header Style and Scroll to Top


        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                // var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    // scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    // scrollLink.fadeOut(300);
                }
            }
        }
        $('.navigation a').click(function(e){
            //e.preventDefault();
            $('.navbar-toggle').click()
        });
        headerStyle();
        // dropdown menu
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');
        navcollapse.hover(function () {
            if ($(window).innerWidth() >= mobileWidth) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
                $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
            }
        });
        //Submenu Dropdown Toggle
        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
            //Dropdown Button
            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });
            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }
        //Submenu Dropdown Toggle
        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').click(function () {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });
        }

        //mobile menu background
        $('.navbar-toggle').click(function () {
            $('.main-header').toggleClass('mobile-bg');
        });


        // Slick Slider 

        $('.main-slider-carousel').slick({
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            arrows: false,
        });


        $('.testimonial-wrap').slick({
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            fade: true,
            arrows: false,
        });

        // Counter 

        $('.counter').counterUp({
            delay: 10,
            time: 1000

        });

        // Wow Js 
        new WOW().init();


        // Isotope masonry 
        $('.itop-masonry').isotope({
            itemSelector: '.itop-masonry-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1
            }
        })
    });

    $(window).on('scroll', function () {
        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();
    });


    //Smooth scroll on menu item click

    $('.nav-main-items a').on('click', function(e){
        if(this.hash !== '') {
            e.preventDefault();

            const hash = this.hash;

            $('html, body').animate(
                {scrollTop: $(hash).offset().top},
                800
            )
        }
    })


    // Scroll to Top Button 
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 300) {
            $('#return-to-top').fadeIn(200);
        } else {
            $('#return-to-top').fadeOut(200);
        }
    });
    $('#return-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });

// Preloader
    $(window).on('load', function () {
        function handlePreloader() {
            if ($('.preloader').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }
        handlePreloader();
    });


})(window.jQuery);


//jquery if visible

ScrollOut({
    targets: 'p, .module, li'
})

//parallax image
$('.parallaxsection').parallax({imageSrc: './assets/images/about-us/about-us-1.png'});