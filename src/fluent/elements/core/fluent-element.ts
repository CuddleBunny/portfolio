import { CssAnimator } from 'aurelia-animator-css';
import { inject } from 'aurelia-framework';

@inject(Element, CssAnimator)
export class FluentElement {
	constructor(protected element: Element, protected animator: CssAnimator) { }

	attached() {
		this.animator.enter(this.element);
	}


}
