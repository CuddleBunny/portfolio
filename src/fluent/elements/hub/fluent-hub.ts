import { FluentElement } from './../core/fluent-element';

export class FluentHub extends FluentElement {
	attached() {
		this.element.addEventListener('wheel', (e) => {
			this.element.scrollLeft -= e.wheelDelta;
		});
	}
}
