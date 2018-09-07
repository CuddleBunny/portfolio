import { QuillEditor } from './editor/quill-editor';
import { FrameworkConfiguration } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
	config.globalResources([QuillEditor]);
}
