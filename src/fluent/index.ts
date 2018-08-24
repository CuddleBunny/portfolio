import './styles/fluent.less';

import { FrameworkConfiguration } from 'aurelia-framework';
import { FluentButton } from './elements/button/fluent-button';
import { FluentTile } from './elements/tile/fluent-tile';
import { FluentTileGroup } from './elements/tile-group/fluent-tile-group';
import { FluentLiveTile } from './elements/live-tiles/fluent-live-tile';

export function configure(config: FrameworkConfiguration) {
	config.globalResources([FluentButton, FluentLiveTile, FluentTile, FluentTileGroup]);
}
