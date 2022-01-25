/* scroll animations plugin */
$(function() {
	$.fn.animateIn = function(options) {
		return this.each(function() {
			var settings = $.extend(
				{
					//default settings
					offset: 0,
					modifier: '__in'
				},
				options
			);
			var item = $(this);
			var itemOffsetTop = $(this).offset().top;
			var triggerVal = itemOffsetTop + settings.offset;

			function animateBlock(scrollTop) {
				// if element is already in view or check if it comes into view
				if (
					scrollTop + $(window).outerHeight() >= triggerVal ||
					$(window).outerHeight() >= triggerVal
				) {
					item.addClass(settings.modifier);
				}
			}

			$(window).scroll(function() {
				var scrollTop = $(window).scrollTop();
				animateBlock(scrollTop);
			});
			$(window).scroll();
		});
	};
});
$(window).on('load', function(){
	setTimeout(function(){
		$('.__animate').animateIn({
			offset: 0,
			modifier: '__animatein'
		});
		$('.__animateleft').animateIn({
			offset: 0,
			modifier: '__animatein'
		});
		$('.__animateright').animateIn({
			offset: 0,
			modifier: '__animatein'
		});
		$('.__animatenow').animateIn({
			offset: 0,
			modifier: '__animatein'
		});
		$('.__animatetop').animateIn({
			offset: 0,
			modifier: '__animatein'
		});
		$('.__animatefade').animateIn({
			offset: 0,
			modifier: '__animatein'
		});
	});
});