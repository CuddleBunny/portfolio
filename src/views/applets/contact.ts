import { FluentApplet } from 'fluent/elements/applet/fluent-applet';
import { inject, NewInstance } from 'aurelia-framework';
import { ValidationController } from 'aurelia-validation';
import { DialogController } from 'aurelia-dialog';
import { required, email, ValidationRules } from 'aurelia-validatejs';

@inject(NewInstance.of(ValidationController), DialogController, Element)
export class Contact extends FluentApplet {
	from: string;
	subject: string;
	body: string;

	constructor(protected validationController: ValidationController, dialogController, element) {
		super(dialogController, element);

		ValidationRules
			.ensure((vm: Contact) => vm.from).required().email()
			.ensure('subject').required()
			.ensure('body').required()
			.on(this);
	}

	close() {
		this.controller.cancel();
	}

	send() {
		let errors = this.validationController.validate().then(result => console.log(result)).catch(reason => console.warn(reason));

		console.log('??');

		//e.preventDefault();

		//return false;
	}
}
