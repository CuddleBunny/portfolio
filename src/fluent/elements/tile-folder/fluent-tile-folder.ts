import { customElement, bindable } from 'aurelia-templating';
import { FluentElement } from '../core/fluent-element';

@customElement('fluent-tile-folder')
export class FluentTileFolder extends FluentElement {
	@bindable open: boolean = false;

	toggle() {
		this.open = !this.open;

		if(this.open) {
			this.animator.removeClass(this.element, 'open');
			Array.from(this.element.querySelectorAll('.tiles > *')).forEach((element, key, parent) => {
				this.animator.leave(element);
			});
		} else {
			this.animator.addClass(this.element, 'open');
			Array.from(this.element.querySelectorAll('.tiles > *')).forEach((element, key, parent) => {
				this.animator.enter(element);
			});
		}
	}
}
