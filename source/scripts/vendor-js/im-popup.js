$.fn.imPopup = function() {
    var $this, id, ct_open;
    $this = this;
    id = '';
    $this.on('click', function(e) {
		ct_open = $(".im-popup._visible").length;

		$(".im-popup").removeClass('_visible');
        e.preventDefault();
        id = $(this).data('id');
        if ($(id).length) {
            if(ct_open == 0) {
				var offset = window.innerWidth - $(window).width();
				$('body').css({
	                overflow: 'hidden',
	                paddingRight: offset
	            });
			}
        };
        return $(".im-popups " + id).addClass('_visible');
    });
    $('.im-popup .b-popup__close').click(function(e) {
        return e.preventDefault();
    });
    return $('.im-popup').on('click', function(e) {
        if (!$(e.target).hasClass('im-popup-inside') && !$(e.target).parents('.im-popup-inside').length || $(e.target).hasClass('b-popup__close')) {
            var id = '#' + $(this).attr('id');
            if ($('.im-popup._visible').length == 1) {
                setTimeout(function() {
                    $('body').css({
                        overflow: '',
                        paddingRight: ''
                    });
                }, 300);
            }
			if ($(this).attr('id') != "" && $(".im-popups " + id).length) $(".im-popups " + id).removeClass('_visible')
            return;
        }
    });
};

$('.im-popup-link').imPopup();