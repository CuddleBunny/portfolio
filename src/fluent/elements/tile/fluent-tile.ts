import { customElement } from 'aurelia-templating';
import { bindable } from 'aurelia-framework';
import { FluentElement } from '../core/fluent-element';

@customElement('fluent-tile')
export class FluentTile extends FluentElement {
	@bindable displayName: string;
	@bindable icon: string;
}
