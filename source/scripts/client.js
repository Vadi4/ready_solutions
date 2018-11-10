$(function() {

	isOnScreen( $('.isOnScreen') );

	/////////// JQUERY MASKED INPUT PHONE

	$(".js-phone-mask").mask("(9999)999-99-99");

	/////////// END JQUERY MASKED INPUT PHONE

});

// ISONSCREEN START

function isOnScreen(el) {
	var $el = el;
	var $window = $(window);
	var winTop = $window.scrollTop();
	var winHeight = $window.height();
	var winBottom = winTop + winHeight;
	var top, height, bottom;


	if( $el.length ) {
		$el.each( function() {
			var $this = $(this);
			top = $this.offset().top;
			height = $this.outerHeight();
			bottom = top + height;

			if(( top >= winTop && top < winBottom ) ||
				( bottom > winTop && bottom < winBottom ) ||
				( height > winHeight && top <= winTop && bottom >= winBottom )) {

				// DO SOMETHING

				// FOR EXAMPLE

				$(this).animate({
					opacity: '1'
				}, 1000);

				// END EXAMPLE

			};
		});
	};
};	

// ISONSCREEN END

$(window).on('scroll', function() {
	isOnScreen( $('.isOnScreen') );
});

// COUNTER JS

$(function() {
	$('body').on('click', '.js-minus', function() {
		var $input = $(this).siblings('input');
		$input.val( +$input.val() - 1 );
		checkCountBtnState( $input );
	});

	$('body').on('click', '.js-plus', function() {
		var $input = $(this).siblings('input');
		$input.val( +$input.val() + 1 );
		checkCountBtnState( $input );
	});
});


function checkCountBtnState(input) {
	var val, min, max;
	var $this = input;
	val = $this.val();
	min = $this.attr('data-min');
	max = $this.attr('data-max');

	if( val == min ) {
		$this.siblings('.js-minus').addClass('disabled');
		$this.siblings('.js-plus').removeClass('disabled');
	} else if( val == max) {
		$this.siblings('.js-plus').addClass('disabled');
		$this.siblings('.js-minus').removeClass('disabled');
	} else {
		$this.siblings('.js-plus').removeClass('disabled');
		$this.siblings('.js-minus').removeClass('disabled');
	};
};

// END COUNTER JS