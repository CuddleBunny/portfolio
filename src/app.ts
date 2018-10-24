import { PLATFORM } from 'aurelia-pal';
import { RouterConfiguration, Router, NavigationInstruction } from 'aurelia-router';

import { AppInsightsService } from './app-insights';

export class App {
	router: Router;

	configureRouter(config: RouterConfiguration, router: Router): void {

		this.router = router;

		config.title = 'Portfolio | Josh Dovishaw';
		config.addPipelineStep('modelbind', AppInsightsService);

		config.map([
			{ route: '', name: 'Start', moduleId: PLATFORM.moduleName('views/start') },
			{ route: 'contact', name: 'Contact Me', moduleId: PLATFORM.moduleName('views/applets/contact') },
			{ route: 'work', name: 'Work', moduleId: PLATFORM.moduleName('views/applets/work') },
			{ route: 'map', name: 'Map', moduleId: PLATFORM.moduleName('views/applets/map') }
		]);
	}
}
