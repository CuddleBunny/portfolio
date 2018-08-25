import { CssAnimator } from 'aurelia-animator-css';
import { inject } from 'aurelia-framework';
import { customElement, bindable } from 'aurelia-templating';

@customElement('fluent-tile-group')
@inject(Element, CssAnimator)
export class FluentTileGroup {
	@bindable displayName: string;

	@bindable animate: boolean = false;
	@bindable stagger: number = .05;
	@bindable duration: number = .5;

	constructor(private element: Element, private animator: CssAnimator) {}

	attached() {
		this.animator.enter(this.element);
	}
}
