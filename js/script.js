$(document).on('ready', function() {
    $(".regular").slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $(".video").slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,

        responsive: [{
            breakpoint: 768,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    $(".share").slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,

        responsive: [{
            breakpoint: 768,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
		$('.arrow').fadeIn();
	} else {
	  $('.arrow').fadeOut();
	}
});

$('.arrow').on('click', function(e) {
  e.preventDefault();
	$('html, body').animate({scrollTop : 0}, 800);
});