$(function() {

	/////////// JQUERY MASKED INPUT PHONE

	$(".js-phone-mask").mask("(9999)999-99-99");

	/////////// END JQUERY MASKED INPUT PHONE

	// ISONSCRESSN START
	
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

				};
			});
		};
	};	

	// ISONSCREEN END

});