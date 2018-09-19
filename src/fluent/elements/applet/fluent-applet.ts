import { inject, bindable } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Element, Router)
export class FluentApplet {
	@bindable displayName: string = '';

	constructor(protected element: Element, protected router: Router) {}

	close() {
		this.router.navigate('', { replace: true });
	}
}
