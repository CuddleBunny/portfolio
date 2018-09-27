/// <reference path="../lib/jquery-1.8.3.min.js" />
/// <reference path="../lib/jquery.reveal.js" />
/// <reference path="../lib/sly.js" />

// Disable window bounce in iOS.
document.ontouchmove = function (event) {
	event.preventDefault();
}

// Preloader
window.addEventListener('DOMContentLoaded', function () {
	$("body").queryLoader2();
	$('#intro-screen').show();
	$("#slide-in-quiz").hide();
	$("#navCon").hide();
	$("#header-buttons").hide();
	$('#blocker').hide();
});

// Header
$('#achievements-button').click(function () {
	$('#achievement-panel').toggle();
});

$('#home-button').click(function () {
	$('#intro-screen').toggle();
});

// Intro
$('#scene1next').click(function () {
	$('.scene1').hide();
	//$('.scene2').show();
	$('.scene3').show(); // skipping the video for now.
});

$('#scene2next').click(function () {
	$('.scene2').hide();
	$('.scene3').show();
});

$('#scene3next').click(function () {
	$('#intro-screen').hide();
	$('.scene3').hide();
	$("#navCon").show();
	$('.scene1').show();
	$("#header-buttons").show();
});

$('#startScav').click(function () {
    $('#intro-screen').hide();
    $('.scene3').hide();
    $('.scene1').show();
    $("#navCon").show();
    $("#slide-in-quiz").show();
    $("#header-buttons").show();
});