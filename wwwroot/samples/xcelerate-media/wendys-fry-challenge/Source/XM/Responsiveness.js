/// <reference path="../JS/jQuery/jquery-1.11.1.js" />
/// <reference path="../../Assets/AppSettings.js" />
/// <reference path="Helpers.js" />

$(window).resize(function () {
	if (IsInMobileSafari() || IsInAndroid()) {
		document.getElementById('contents').contentDocument.body.width = 0;
		document.getElementById('contents').contentDocument.body.height = 0;
	}
	
	window.contentWidth = $('body').innerWidth();
	window.contentHeight = $('#content-container').innerHeight();
});

window.contentWidth = $('body').innerWidth();
window.contentHeight = $('#content-container').innerHeight();