import { bindable, customElement } from 'aurelia-templating';
import { FluentElement } from '../core/fluent-element';

@customElement('fluent-tile-group')
export class FluentTileGroup extends FluentElement {
	@bindable displayName: string;

	@bindable animate: boolean = false;
	@bindable stagger: number = .05;
	@bindable duration: number = .5;
}
