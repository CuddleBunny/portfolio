import { customElement, bindable, LogManager } from 'aurelia-framework';
import { FluentElement } from '../core/fluent-element';

@customElement('fluent-live-tile')
export class FluentLiveTile extends FluentElement {
	@bindable interval: number = Math.random() * 2000 + 4000;
	@bindable animation: 'flip-y' | 'flip-x' | 'slide' | 'none' = 'none';

	private activeChild: number = 0;
	private animationInterval;

	attached() {
		super.attached();

		this.element.children[0].classList.add('active');

		if(this.animation != 'none')
			this.animationInterval = setInterval(() => this.animate(), this.interval);
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
			this.animationInterval = setInterval(() => this.animate(), this.interval);
		}
	}

	animationChanged(newValue, oldValue) {
		this.element.classList.remove(oldValue);

		if(oldValue == 'none')
			this.intervalChanged(this.interval, this.interval);
	}
}
