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


$(window).on('scroll', function() {
	isOnScreen( $('.isOnScreen') );
});

// ISONSCREEN END

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

//	DEBOUNCE THROTTLE JS

// $(window).on('resize', function() {
// 	debounceTest('simple function');
// })

// if ('addEventListener' in window) {
//     var handleResize = debounce(function() {
//     	debounceTest('debounce function');
//     }, 250);

//     window.addEventListener('resize', handleResize);
// };

// function debounceTest(text) {
// 	console.log( text );
// }

// 	END DEBOUNCE THROTTLE

// START HIDDEN TEXT

$(function() {
	checkHiddenText();
});

$(window).on('resize', function() {
	checkHiddenText();
});

function checkHiddenText() {
	console.log('hidden text');
	$('.js-hidden-text-wrap').each( function() {
		var $this = $(this);
		var $childrenWrap = $this.children('div');
		var $showMore = $this.siblings('.js-show-more');

		if( parseInt( $this.css('max-height')) < $childrenWrap.outerHeight() ) {
			$showMore.css({'display': ''});
		} else {
			$showMore.css({'display': 'none'});
		}
	});
};

$('body').on('click', '.js-show-more, .js-hide-text', function(e) {
	e.preventDefault();
	var $this = $(this);
	var dataText = $this.attr('data-text');
	$this.attr('data-text', $this.text() ).text( dataText );
	if( $this.hasClass('js-show-more') ) {
		$this.siblings('.js-hidden-text-wrap').css({'max-height': 'none'});
		$this.removeClass('js-show-more').addClass('js-hide-text');
	} else {
		$this.siblings('.js-hidden-text-wrap').css({'max-height': ''});
		$this.removeClass('js-hide-text').addClass('js-show-more');
	}
});

// END HIDDEN TEXT