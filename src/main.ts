/// <reference types="aurelia-loader-webpack/src/webpack-hot-interface"/>
// we want font-awesome to load as soon as possible to show the fa-spinner
import { Aurelia } from 'aurelia-framework'
import environment from 'environment';
import { PLATFORM } from 'aurelia-pal';
import * as Bluebird from 'bluebird';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCogs, faCamera } from '@fortawesome/pro-light-svg-icons';

// Load icon fonts
library.add(faCogs, faCamera);

// Automatically observe the dom for icons to render
dom.watch();

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({ warnings: { wForgottenReturn: false } });

export function configure(aurelia: Aurelia) {
	aurelia.use
		.standardConfiguration()
		.feature(PLATFORM.moduleName('resources/index'))
		.feature(PLATFORM.moduleName('fluent/index'));

	// Uncomment the line below to enable animation.
	aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));
	// if the css animator is enabled, add swap-order="after" to all router-view elements

	// Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
	// aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));

	if (environment.debug) {
		aurelia.use.developmentLogging();
	}

	if (environment.testing) {
		aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
	}

	return aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
