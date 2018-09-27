function IsInMobileSafari() {
	var isIOS = navigator.userAgent.match(/iPhone|iPad|iPod/i);
	if (isIOS == null) {
		isIOS = false;
	}
	return isIOS;
}

function GetWindowWidth() {
	return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}