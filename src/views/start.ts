import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework';
import { DialogService } from 'aurelia-dialog';
import { Contact } from './applets/contact';

@inject(DialogService, Router, Element)
export class Start {
	constructor(private dialogService: DialogService, private router: Router, private element:Element) {

	}

	contact() {
		//this.openDialog(Contact);
		this.router.navigate('contact');
	}

	openDialog(vm: object) {
		return this.dialogService.open({
			viewModel: vm,
			host: document.querySelector('fluent-applet-host')
		});
	}
}
