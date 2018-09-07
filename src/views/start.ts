import { inject } from 'aurelia-framework';
import { DialogService } from 'aurelia-dialog';
import { Contact } from './applets/contact';

@inject(DialogService, Element)
export class Start {
	constructor(private dialogService: DialogService, private element:Element) {

	}

	contact() {
		this.openDialog(Contact);
	}

	openDialog(vm: object) {
		return this.dialogService.open({
			viewModel: vm,
			host: document.querySelector('fluent-applet-host')
		});
	}
}
