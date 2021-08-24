$(document).ready(function () {

    // $('.product-slide').slick({
    //     dots: false,
    //     infinite: false,
    //     speed: 300,
    //     slidesToShow: 3,
    //     autoplay: false,
    //     arrows: true,
    //     nextArrow: ".pnext",
    //     prevArrow: '.pprev',
    //     responsive: [{
    //             breakpoint: 1024,
    //             settings: {
    //             }
    //         },
    //         {
    //             breakpoint: 992,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // });

    // $('a').on('click', function (e) {
    //     e.preventDefault;
    //     e.stopImmediatePropagation;
    //     e.stopPropagation;
    //     var link = $(this).data('href');
    //     $.ajax({
    //         url: 'http://book.sobujdiganta.com/login',
    //         type: 'GET',
    //         cache: false,
    //         success: function (response) {
    //             console.log(response);
    //         }
    //     });
    // });

    new WOW().init();
});