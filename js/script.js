jQuery(document).ready(function ($) {
    $('.dr-language').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });
    /*
     * slider-news
     */
    var $slider_news = $('.slider-news');
    if ($slider_news.length > 0) {
        $slider_news.owlCarousel({
            loop: true,
            margin: 28,
            nav: true,
            navText: ['&nbsp;', '&nbsp;'],
            ots: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1024: {
                    items: 2
                },
                1366: {
                    items: 2
                }
            }
        });
    }

    /*
     * news-design
     */
    var $news_design = $('.news-design');
    if ($news_design.length > 0) {
        $news_design.owlCarousel({
            loop: true,
            margin: 28,
            nav: true,
            navText: ['&nbsp;', '&nbsp;'],
            ots: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1024: {
                    items: 1
                },
                1366: {
                    items: 1
                }
            }
        });
    }

    /*
     * massima-carousel
     */
    var $massima_carousel = $('.massima-carousel');
    if ($massima_carousel.length > 0) {
        $massima_carousel.owlCarousel({
            loop: true,
            margin: 28,
            nav: true,
            navText: ['&nbsp;', '&nbsp;'],
            ots: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1024: {
                    items: 1
                },
                1366: {
                    items: 1
                }
            }
        });
    }

    /*
     * ante-carousel
     */
    var $ante_carousel = $('.ante-carousel');
    if ($ante_carousel.length > 0) {
        $ante_carousel.owlCarousel({
            loop: true,
            margin: 28,
            nav: true,
            navText: ['&nbsp;', '&nbsp;'],
            ots: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 2
                },
                1366: {
                    items: 2
                }
            }
        });
    }

    /*
     * potrebbe-carousel
     */
    var $potrebbe_carousel = $('.potrebbe-carousel');
    if ($potrebbe_carousel.length > 0) {
        $potrebbe_carousel.owlCarousel({
            loop: true,
            margin: 28,
            nav: true,
            navText: ['&nbsp;', '&nbsp;'],
            ots: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 2
                },
                1366: {
                    items: 2
                }
            }
        });
    }
    /*
     * Close caption slide
     */
    var $tvclose = $('.tvclose');
    if ($tvclose.length > 0) {
        $tvclose.click(function (e) {
            e.preventDefault();
            $(this).closest('.carousel-caption').slideUp(400);
            $(this).closest('.carousel-caption').addClass('tvhide');
        })
    }
});