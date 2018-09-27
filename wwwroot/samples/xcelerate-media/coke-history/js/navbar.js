// Call Sly on frame
var navbar = new Sly('.frame', {
	horizontal: 1,
	itemNav: 'centered',
	smart: 1,
	activateMiddle: 1,
	activateOn: 'click',
	mouseDragging: 1,
	touchDragging: 1,
	releaseSwing: 1,
	startAt: 0,
	speed: 300,
	elasticBounds: 1,

	dragHandle: 5,
	dynamicHandle: 1,
	clickBar: 1,

	// Buttons
	prev: $('#leftNavBtn'),
	next: $('#rightNavBtn')
});

navbar.on('active', function (eventName, itemIndex) {
	parallax.slideTo((5428 * itemIndex) + (GetWindowWidth() * ((5428 * itemIndex) / 74464)), false);
});

navbar.init();