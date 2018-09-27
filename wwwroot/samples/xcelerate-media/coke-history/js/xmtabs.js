/// <reference path="../lib/jquery-1.8.3.min.js" />

(function ($) {
	$.fn.extend({
		xmtabs: function () {
			$(this).find('.xm-tabs').children().each(function () {
				// Add click events
				$(this).click(function () {
					var index = $(this).index();
					$(this).parent().parent().children('.xm-tab-content').children().each(function () {
						if ($(this).index() == index)
							$(this).show();
						else
							$(this).hide();
					});
				});
			});

			// Hide all but the first tab.
			$(this).find('.xm-tab-content').children().slice(1).hide();
		}
	});
})(jQuery);

$('.xm-tab-control').each(function () {
	$(this).xmtabs();
});