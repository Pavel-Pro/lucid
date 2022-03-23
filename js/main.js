	$('.burger').click(function() {
		$('.menu').slideToggle('400')
		$('.burger__item:first-child').toggleClass('burger__item-top')
		$('.burger__item:nth-child(2)').toggleClass('burger__item-middle')
		$('.burger__item:last-child').toggleClass('burger__item-bottom');
	});
	$('.testimonials__slider').slick({
		arrows: false,
     	dots: true,
      	slidesToShow: 2,
      	slidesToScroll: 2,
      	responsive: [{
      		breakpoint: 640,
		    	settings: {
		    		slidesToShow: 1,
		    		slidesToScroll: 1,
		    	}
		    }
	    ]
	});
	$('.answer').hide();
	$('.faq__title').click(function () {
		var $answer = $(this).next('.answer');
		if ($answer.is(':hidden')) {
			$answer.slideDown();
		}else {
			$answer.slideUp();
		}
	});
	$('.login__title').click(function(evt) {
		$('.form-login').slideToggle(200);
	});