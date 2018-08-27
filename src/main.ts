/// <reference types="aurelia-loader-webpack/src/webpack-hot-interface"/>
import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faGithub, faLinkedinIn, faRedditAlien, faTwitter, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faCamera, faCogs, faFileAlt, faEnvelope } from '@fortawesome/pro-light-svg-icons';
import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import * as Bluebird from 'bluebird';
import environment from 'environment';


// Load icon fonts
library.add(faCogs, faCamera, faGithub, faFileAlt, faFacebookF, faLinkedinIn, faTwitter, faRedditAlien, faEnvelope, faStackOverflow);

// Automatically observe the dom for icons to render
dom.watch();

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({ warnings: { wForgottenReturn: false } });

export function configure(aurelia: Aurelia) {
	aurelia.use
		.standardConfiguration()
		.feature(PLATFORM.moduleName('resources/index'))
		.feature(PLATFORM.moduleName('fluent/index'));

	aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));
	// if the css animator is enabled, add swap-order="after" to all router-view elements

	if (environment.debug) {
		aurelia.use.developmentLogging();
	}

	if (environment.testing) {
		aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
	}

	return aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
