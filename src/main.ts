/// <reference types="aurelia-loader-webpack/src/webpack-hot-interface"/>
import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faGithub, faLinkedinIn, faRedditAlien, faTwitter, faStackOverflow, faDiscord, faGitter, faSteam } from '@fortawesome/free-brands-svg-icons';
import { faCamera, faCogs, faFileAlt, faEnvelope, faCode, faChevronDown, faPaperPlane, faTrash, faTrashAlt } from '@fortawesome/pro-light-svg-icons';
import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import * as Bluebird from 'bluebird';
import environment from 'environment';

// Load icon fonts
library.add(faCogs, faCamera, faGithub, faFileAlt, faFacebookF, faLinkedinIn, faTwitter, faRedditAlien, faEnvelope, faStackOverflow, faCode, faChevronDown, faDiscord, faPaperPlane, faTrashAlt, faGitter, faSteam);

// Automatically observe the dom for icons to render
dom.watch();

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({ warnings: { wForgottenReturn: false } });

export function configure(aurelia: Aurelia) {
	aurelia.use
		.standardConfiguration()
		.plugin(PLATFORM.moduleName('aurelia-dialog'), config => {
			config.useDefaults();
			config.settings.lock = false;
			config.settings.centerHorizontalOnly = true;
		})
		.plugin(PLATFORM.moduleName('aurelia-validation'))
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
