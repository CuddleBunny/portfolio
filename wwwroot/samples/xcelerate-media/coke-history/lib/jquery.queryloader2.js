/*
 * QueryLoader v2 - A simple script to create a preloader for images
 *
 * For instructions read the original post:
 * http://www.gayadesign.com/diy/queryloader2-preload-your-images-with-ease/
 *
 * Copyright (c) 2011 - Gaya Kessler
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Version:  2.8.3
 * Last update: 2013-12-05
 */
(function ($) {
	function OverlayLoader(parent) {
		this.parent = parent;
		this.container;
		this.loadbar;
		this.wave;
		this.percentageContainer;
	};

	OverlayLoader.prototype.createOverlay = function () {
		var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		//determine postion of overlay and set parent position
		var overlayPosition = "absolute";

		if (this.parent.element.tagName.toLowerCase() == "body") {
			overlayPosition = "fixed";
		} else {
			var pos = this.parent.$element.css("position");
			if (pos != "fixed" || pos != "absolute") {
				this.parent.$element.css("position", "relative");
			}
		}

		//create the overlay container
		this.container = $("<div id='" + this.parent.options.overlayId + "'></div>").css({
			width: "100%",
			height: "100%",
			backgroundColor: this.parent.options.backgroundColor,
			backgroundPosition: "fixed",
			position: overlayPosition,
			zIndex: 666999, //very high!
			top: 0,
			left: 0
		}).appendTo(this.parent.$element);

		//create the loading bar
		this.loadbar = $("<div id='qLbar'></div>").css({
			height: ((windowWidth / 960) * 170) + "px",
			marginTop: "-" + (((windowWidth / 960) * 170) / 2) + "px",
			backgroundColor: this.parent.options.barColor,
			width: "0%",
			position: "absolute",
			top: "50%"
		}).appendTo(this.container);

		//create the wave
		this.wave = $('<svg id="wave" viewBox="0 0 960 172.8" width="100%" preserveAspectRatio="yMax meet">' +
				'<g><defs><rect id="SVGID_1_" y="0" width="960" height="172.8"/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><path clip-path="url(#SVGID_2_)" fill-rule="evenodd" clip-rule="evenodd" fill="#C70015" d="M0,0v6.284c419.116,268.76,809.357,30.907,960,94.282V0H0z"/><path clip-path="url(#SVGID_2_)" fill-rule="evenodd" clip-rule="evenodd" fill="#C70015" d="M0,116.227v56.574h960v-9.643C701.831,49.557,343.612,247.505,0,116.227"/></g>' +
			'</svg>').css({
				height: ((windowWidth / 960) * 172.8) + "px",
				marginTop: "-" + (((windowWidth / 960) * 172.8) / 2) + "px",
				width: "100%",
				border: "5px",
				borderColor: "#C70015",
				position: "absolute",
				top: "50%"
			}).appendTo(this.container);

		//if percentage is on
		if (this.parent.options.percentage == true) {
			this.percentageContainer = $("<div id='qLpercentage'></div>").text("0%").css({
				height: "40px",
				width: "100px",
				fontFamily: "sans-serif",
				fontWeight: "bold",
				position: "absolute",
				fontSize: "3em",
				top: "50%",
				left: "50%",
				marginTop: '0px',
				textAlign: "center",
				marginLeft: "-50px",
				color: this.parent.options.barColor
			}).appendTo(this.container);
		}

		//if no images... destroy
		if (!this.parent.preloadContainer.toPreload.length || this.parent.alreadyLoaded == true) {
			this.parent.destroyContainers();
		}
	};

	OverlayLoader.prototype.updatePercentage = function (percentage) {
		this.loadbar.stop().animate({
			width: percentage + "%",
			minWidth: percentage + "%"
		}, 200);

		//update textual percentage
		if (this.parent.options.percentage == true) {
			this.percentageContainer.text(Math.ceil(percentage) + "%");
		}
	};
	function PreloadContainer(parent) {
		this.toPreload = [];
		this.parent = parent;
		this.container;
	};

	PreloadContainer.prototype.create = function () {
		this.container = $("<div></div>").appendTo("body").css({
			display: "none",
			width: 0,
			height: 0,
			overflow: "hidden"
		});

		//process the image queue
		this.processQueue();
	};

	PreloadContainer.prototype.processQueue = function () {
		//add background images for loading
		for (var i = 0; this.toPreload.length > i; i++) {
			if (!this.parent.destroyed) {
				this.preloadImage(this.toPreload[i]);
			}
		}
	};

	PreloadContainer.prototype.addImage = function (src) {

		this.toPreload.push(src);
	};

	PreloadContainer.prototype.preloadImage = function (url) {

		var image = new PreloadImage();
		image.addToPreloader(this, url);
		image.bindLoadEvent();
	};
	function PreloadImage(parent) {
		this.element;
		this.parent = parent;
	};

	PreloadImage.prototype.addToPreloader = function (preloader, url) {

		this.element = $("<img />").attr("src", url);
		this.element.appendTo(preloader.container);
		this.parent = preloader.parent;
	};

	PreloadImage.prototype.bindLoadEvent = function () {
		this.parent.imageCounter++;

		//remove the source
		var src = this.element.attr("src");
		this.element.removeAttr("src");
		var that = this;

		//bind the load even
		setTimeout(function () {
			that.element.on("load error", that, function (e) {
				e.data.completeLoading();
			});

			//put the source back
			that.element.attr("src", src);
		}, 1);
	};

	PreloadImage.prototype.completeLoading = function () {
		this.parent.imageDone++;

		var percentage = (this.parent.imageDone / this.parent.imageCounter) * 100;

		//update the percentage of the loader
		this.parent.overlayLoader.updatePercentage(percentage);

		//all images done!
		if (this.parent.imageDone == this.parent.imageCounter) {
			this.parent.endLoader();
		}
	};
	function QueryLoader2(element, options) {
		this.element = element;
		this.$element = $(element);
		this.options = options;
		this.foundUrls = [];
		this.destroyed = false;
		this.imageCounter = 0;
		this.imageDone = 0;
		this.alreadyLoaded = false;

		//create objects
		this.preloadContainer = new PreloadContainer(this);
		this.overlayLoader = new OverlayLoader(this);

		//The default options
		this.defaultOptions = {
			onComplete: function () { },
			onLoadComplete: function () { },
			backgroundColor: "#C70015",
			barColor: "#FFF",
			overlayId: 'qLoverlay',
			barHeight: 72,
			percentage: true,
			deepSearch: true,
			completeAnimation: "fade",
			minimumTime: 2000
		};

		//run the init
		this.init();
	};

	QueryLoader2.prototype.init = function () {



		this.options = $.extend({}, this.defaultOptions, this.options);


		var images = this.findImageInElement(this.element);
		if (this.options.deepSearch == true) {

			var elements = this.$element.find("*:not(script)");
			for (var i = 0; i < elements.length; i++) {
				this.findImageInElement(elements[i]);
			}
		}

		//create containers
		this.preloadContainer.create();
		this.overlayLoader.createOverlay();
	};

	QueryLoader2.prototype.findImageInElement = function (element) {
		var url = "";
		var obj = $(element);
		var type = "normal";

		if (obj.css("background-image") != "none") {
			//if object has background image
			url = obj.css("background-image");
			type = "background";
		} else if (typeof (obj.attr("src")) != "undefined" && element.nodeName.toLowerCase() == "img") {
			//if is img and has src
			url = obj.attr("src");
		}

		//skip if gradient
		if (!this.hasGradient(url)) {
			//remove unwanted chars
			url = this.stripUrl(url);

			//split urls
			var urls = url.split(", ");

			for (var i = 0; i < urls.length; i++) {
				if (this.validUrl(urls[i]) && this.urlIsNew(urls[i])) {

					var extra = "";

					if (this.isIE() || this.isOpera()) {
						//filthy always no cache for IE, sorry peeps!
						extra = "?rand=" + Math.random();

						//add to preloader
						this.preloadContainer.addImage(urls[i] + extra);
					} else {
						if (type == "background") {
							//add to preloader
							this.preloadContainer.addImage(urls[i] + extra);
						} else {
							var image = new PreloadImage(this);
							image.element = obj;
							image.bindLoadEvent();
						}
					}

					//add image to found list
					this.foundUrls.push(urls[i]);
				}
			}
		}
	};

	QueryLoader2.prototype.hasGradient = function (url) {
		if (url.indexOf("gradient") == -1) {
			return false;
		} else {
			return true;
		}
	};

	QueryLoader2.prototype.stripUrl = function (url) {
		url = url.replace(/url\(\"/g, "");
		url = url.replace(/url\(/g, "");
		url = url.replace(/\"\)/g, "");
		url = url.replace(/\)/g, "");

		return url;
	};

	QueryLoader2.prototype.isIE = function () {
		return navigator.userAgent.match(/msie/i);
	};

	QueryLoader2.prototype.isOpera = function () {
		return navigator.userAgent.match(/Opera/i);
	};

	QueryLoader2.prototype.validUrl = function (url) {
		if (url.length > 0 && !url.match(/^(data:)/i)) {
			return true;
		} else {
			return false;
		}
	};

	QueryLoader2.prototype.urlIsNew = function (url) {
		if (this.foundUrls.indexOf(url) == -1) {
			return true;
		} else {
			return false;
		}
	};

	QueryLoader2.prototype.destroyContainers = function () {
		this.destroyed = true;
		this.preloadContainer.container.remove();
		this.overlayLoader.container.remove();
	};

	QueryLoader2.prototype.endLoader = function () {


		this.destroyed = true;
		this.onLoadComplete();
	};

	QueryLoader2.prototype.onLoadComplete = function () {
		//fire the event before end animation
		this.options.onLoadComplete();

		if (this.options.completeAnimation == "grow") {
			var animationTime = this.options.minimumTime;

			this.overlayLoader.loadbar[0].parent = this; //put object in DOM element
			this.overlayLoader.loadbar.stop().animate({
				"width": "100%"
			}, animationTime, function () {
				$(this).animate({
					top: "0%",
					width: "100%",
					height: "100%"
				}, 500, function () {
					this.parent.overlayLoader.container[0].parent = this.parent; //once again...
					this.parent.overlayLoader.container.fadeOut(500, function () {
						this.parent.destroyContainers();
						this.parent.options.onComplete();
					});
				});
			});
		} else {
			this.overlayLoader.container[0].parent = this;
			this.overlayLoader.container.fadeOut(500, function () {
				this.parent.destroyContainers();
				this.parent.options.onComplete();
			});
		}
	};
	//HERE COMES THE IE SHITSTORM
	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function (elt /*, from*/) {
			var len = this.length >>> 0;
			var from = Number(arguments[1]) || 0;
			from = (from < 0)
				? Math.ceil(from)
				: Math.floor(from);
			if (from < 0)
				from += len;

			for (; from < len; from++) {
				if (from in this &&
					this[from] === elt)
					return from;
			}
			return -1;
		};
	}
	//function binder
	$.fn.queryLoader2 = function (options) {
		return this.each(function () {
			(new QueryLoader2(this, options));
		});
	};
})(jQuery);