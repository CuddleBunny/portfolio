import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework';
import { AppInsightsService } from 'app-insights';

@inject(Router, AppInsightsService)
export class Start {
	constructor(private router: Router, private appInsights: AppInsightsService) {

	}

	contact() {
		this.router.navigate('contact');
	}

	work() {
		this.router.navigate('work');
	}

	map() {
		this.router.navigate('map');
	}

	link(href, name) {
		window.open(href);
		this.appInsights.event('link', { name: name }, {});
	}
}
