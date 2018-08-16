import './styles/fluent.less';

import { FrameworkConfiguration } from 'aurelia-framework';
import { FluentButton } from './elements/button/fluent-button';
import { FluentTile } from './elements/tile/fluent-tile';

export function configure(config: FrameworkConfiguration) {
	config.globalResources([FluentButton, FluentTile]);
}
