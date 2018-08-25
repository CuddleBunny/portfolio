import { customElement, bindable, LogManager } from 'aurelia-framework';
import { FluentElement } from '../core/fluent-element';

@customElement('fluent-live-tile')
export class FluentLiveTile extends FluentElement {
	@bindable interval: number = 5000;
	@bindable animation: 'flip' | 'slide' = 'flip';

	private activeChild: number = 0;
	private animationInterval;

	attached() {
		super.attached();

		this.element.children[0].classList.add('active');
		this.animationInterval = setInterval(this.animate.bind(this), this.interval);
	}

	animate() {
		// If there are more than two children to flip through then cycle through them.
		if(this.element.children.length > 2) {
			this.element.children[this.activeChild].classList.remove('active');

			if(this.activeChild == this.element.children.length)
				this.activeChild = 0;
			else
				this.activeChild++;

			this.element.children[this.activeChild].classList.add('active');
		}

		if(this.element.classList.contains(this.animation))
			this.animator.removeClass(this.element, this.animation);
		else
			this.animator.addClass(this.element, this.animation);
	}

	intervalChanged(newValue, oldValue) {
		if(this.animationInterval) {
			clearInterval(this.animationInterval);
			this.animationInterval = setInterval(this.animate.bind(this), this.interval);
		}
	}

	animationChanged(newValue, oldValue) {
		this.element.classList.remove(oldValue);
	}
}
