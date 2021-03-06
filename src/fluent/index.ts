import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';
import './styles/fluent.less';

const elements = [
	PLATFORM.moduleName('./elements/applet/fluent-applet'),
	PLATFORM.moduleName('./elements/hub/fluent-hub'),
	PLATFORM.moduleName('./elements/button/fluent-button'),
	PLATFORM.moduleName('./elements/live-tiles/fluent-live-tile'),
	PLATFORM.moduleName('./elements/tile-group/fluent-tile-group'),
	PLATFORM.moduleName('./elements/tile/fluent-tile'),
	PLATFORM.moduleName('./elements/tile-folder/fluent-tile-folder')
];

export function configure(config: FrameworkConfiguration) {
	config.globalResources(elements);
}
