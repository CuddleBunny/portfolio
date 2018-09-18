import { customElement, bindable, bindingMode } from "aurelia-framework";
import Quill, { QuillOptionsStatic } from 'quill';

let defaultOptions: QuillOptionsStatic = {
	theme: 'snow'
};

@customElement('quill-editor')
export class QuillEditor {
	@bindable options: QuillOptionsStatic;
	@bindable({ defaultBindingMode: bindingMode.twoWay }) value: string;

	quill: Quill;
	editor: Element;

	attached() {
		this.quill = new Quill(this.editor, Object.assign(defaultOptions, this.options));

		if(this.value)
			this.quill.setText(this.value);

		this.quill.on('text-change', () => this.value = this.quill.getText());
	}

	onValueChanged() {
		this.quill.setText(this.value);
	}
}
