var currentEra = 0;
var slidee = $('#slidee');

var parallax = new Sly(74464, {
	horizontal: 1,
	scrollSource: document.getElementById('main'),
	dragSource: document.getElementById('main'),

	mouseDragging: 1,
	touchDragging: 1,
	releaseSwing: 1,
	scrollBy: 150
});

parallax.on('load move', renderFrame);

parallax.init();

//get x and y
//document.ondblclick = function (e) {
//	var x = e.pageX;
//	var y = e.pageY - Math.round($('#main').offset().top);

//	alert('User clicked at positions: \n' +
//		'Layer 2: ' + (Math.abs(parseInt($('#plax2').css('left').replace('px', ''))) + x) + ' , ' + y + '\n' +
//		'Layer 3: ' + (Math.abs(parseInt($('#plax3').css('left').replace('px', ''))) + x) + ' , ' + y + '\n' +
//		'Layer 4: ' + (Math.abs(parseInt($('#plax4').css('left').replace('px', ''))) + x) + ' , ' + y + '\n' +
//		'Layer 5: ' + (Math.abs(parseInt($('#plax5').css('left').replace('px', ''))) + x) + ' , ' + y);
//};

function renderFrame(e) {
	var slyRef = this;
	var windowWidth = GetWindowWidth();

	// Handle switching overview images.
	var era = Math.ceil(slyRef.pos.cur / 5428);
	//var era = parseInt((slyRef.pos.cur) / ((slyRef.pos.end) / 14)) + 1;

	// At the very left most pixel it hits era 0, roll it up!
	if (era == 0) era = 1;

	if (era != currentEra) {
		$('#era-overview').children().each(function () {
			if ($('#era-overview').children().index(this) == era - 1) {
				// The new image flys in from the appropriate direction.
				if (era > currentEra)
					$(this).css({ left: windowWidth + 'px' });
				else
					$(this).css({ left: -windowWidth + 'px' });
				$(this).show();
				$(this).animate({ left: '0px' }, 500);
			} else if ($('#era-overview').children().index(this) == currentEra - 1) {
				// The old image flys out in the appropriate direction.
				if (era > currentEra)
					$(this).animate({ left: -windowWidth + 'px' }, 500);
				else
					$(this).animate({ left: windowWidth + 'px' }, 500);
			} else {
				// Remaining images hide.
				$(this).hide();
			}
		});

		$('#slidee').children().each(function () {
			if ($('#slidee').children().index(this) != era - 1)
				$(this).removeClass('active');
			else {
				$(this).addClass('active');
				try { // circular dependency causes an error.
					navbar.rel.activeItem = era - 1;
					navbar.last.active = navbar.rel.activeItem = era - 1;
				} catch (err) { }
			}
		});

		currentEra = era;
	}

	// Handle parallax effect.
	$('#main').children().each(function () {
		if ($(this).attr('data-ignore') == 'true')
			return;
		var start = parseInt($(this).attr('data-start')) || 0;
		var ratio = parseFloat($(this).attr('data-ratio')) || 1;
		var position = start - slyRef.pos.cur * ratio + (windowWidth * (slyRef.pos.cur / slyRef.pos.end));

		$(this).css('left', position + 'px');
	});
}
