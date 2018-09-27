/// <reference path="../lib/jquery-1.8.3.min.js" />

(function ($) {
	$.fn.extend({
		xmpanel: function () {
			$(this).find('> li').each(function() {
				$(this).click(function () {
					console.log('Panel clicked.')
					$(this).find('.xm-panel-content').toggle();
				});
			});
		}
	});
})(jQuery);

$('.xm-panel').each(function () {
	$(this).xmpanel();
});