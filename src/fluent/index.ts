import { FluentAppletHost } from './elements/applet-host/fluent-applet-host';
import { FrameworkConfiguration } from 'aurelia-framework';
import { FluentButton } from './elements/button/fluent-button';
import { FluentLiveTile } from './elements/live-tiles/fluent-live-tile';
import { FluentTileFolder } from './elements/tile-folder/fluent-tile-folder';
import { FluentTileGroup } from './elements/tile-group/fluent-tile-group';
import { FluentTile } from './elements/tile/fluent-tile';
import './styles/fluent.less';
import { FluentHub } from 'fluent/elements/hub/fluent-hub';

const elements = [FluentButton, FluentLiveTile, FluentTile, FluentTileGroup, FluentTileFolder, FluentAppletHost, FluentHub]

export function configure(config: FrameworkConfiguration) {
	config.globalResources(elements);
}
