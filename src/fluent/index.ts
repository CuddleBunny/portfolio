import { FrameworkConfiguration } from 'aurelia-framework';
import { FluentButton } from './elements/button/fluent-button';
import { FluentLiveTile } from './elements/live-tiles/fluent-live-tile';
import { FluentTileFolder } from './elements/tile-folder/fluent-tile-folder';
import { FluentTileGroup } from './elements/tile-group/fluent-tile-group';
import { FluentTile } from './elements/tile/fluent-tile';
import './styles/fluent.less';

export function configure(config: FrameworkConfiguration) {
	config.globalResources([FluentButton, FluentLiveTile, FluentTile, FluentTileGroup, FluentTileFolder]);
}
