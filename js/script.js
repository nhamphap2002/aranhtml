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
    if ($slider_news.length > 0)
        $slider_news.owlCarousel({
            loop: true,
            margin: 28,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
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
        })
})