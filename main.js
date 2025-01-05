// Initialize Workshop Carousel
$(document).ready(function() {
    $('.workshop-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // Custom Navigation
    $('.workshop-next').click(function() {
        $('.workshop-carousel').trigger('next.owl.carousel');
    });
    $('.workshop-prev').click(function() {
        $('.workshop-carousel').trigger('prev.owl.carousel');
    });
});

// Add animation classes to workshop items
$(window).scroll(function() {
    $('.workshop-item').each(function() {
        if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
            $(this).addClass('animated fadeInUp');
        }
    });
}); 