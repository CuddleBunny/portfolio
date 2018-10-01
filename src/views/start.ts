import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework';

@inject(Router)
export class Start {
	constructor(private router: Router) {

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
}
