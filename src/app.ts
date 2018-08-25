import { PLATFORM } from 'aurelia-pal';
import { RouterConfiguration, Router, NavigationInstruction } from 'aurelia-router';
import { FluentLiveTile } from 'fluent/elements/live-tiles/fluent-live-tile';

export class App {
	router: Router;

	configureRouter(config: RouterConfiguration, router: Router): void {
		this.router = router;
		config.title = 'Portfolio | Josh Dovishaw';
		config.map([
			{ route: [''], name: 'Start', moduleId: PLATFORM.moduleName('views/start') }
		]);
	}
}
