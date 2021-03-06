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
$('.form-login').validate({
	rules: {
		name: {
			required: true,
			rangelength: [2,12]
		},
		password: {
			required: true,
			rangelength: [5,15]
		}
	},
	messages: {
		name: {
			required: 'Введите имя',
			rangelength: 'Имя должен содержеть не меньше 5 символов.'
		},
		password: {
			required: 'Введите пароль',
			rangelength: 'Пароль должен содержеть не меньше 5 символов.'
		}
	}
});
$('.model').dialog({
	modal: true,
	resizable: false,
	shoe: true,
	hide: true
});