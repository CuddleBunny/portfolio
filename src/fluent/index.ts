import { FluentTile } from './elements/tile/fluent-tile';
import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([FluentTile]);
}
