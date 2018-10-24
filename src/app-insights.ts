import { AppInsights } from 'applicationinsights-js';

export class AppInsightsService {
	constructor() {
		// Azure injects app insights for us.
		if('downloadAndSetup' in AppInsights)
			AppInsights.downloadAndSetup({ instrumentationKey: 'a77e9c81-8acc-46c7-b532-6fa6e3d875d1' });
	}

	run(routingContext, next) {
		AppInsights.trackPageView(routingContext.fragment, window.location.href);
		return next();
	}

	event(name, properties, measurements) {
		AppInsights.trackEvent(name, properties, measurements);
	}
}
