import { FluentApplet } from './../../fluent/elements/applet/fluent-applet';
import { inject, NewInstance } from 'aurelia-framework';
import { ValidationController, ValidationRules, validateTrigger } from 'aurelia-validation';

@inject(NewInstance.of(ValidationController))
export class Contact {
	from: string = '';
	subject: string = '';
	body: string = '';

	applet: FluentApplet;

	constructor(protected validationController: ValidationController) {
		this.validationController.changeTrigger(validateTrigger.manual);
	}

	send() {
		let errors = this.validationController.validate()
			.then(result => console.log(result));
	}

	close() {
		this.applet.close();
	}
}

ValidationRules
	.ensure((c: Contact) => c.from).email().required()
	.ensure((c: Contact) => c.subject).required()
	.ensure((c: Contact) => c.body).required()
	.on(Contact);
