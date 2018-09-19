import { inject, NewInstance } from 'aurelia-framework';
import { ValidationController, ValidationRules } from 'aurelia-validation';

@inject(NewInstance.of(ValidationController))
export class Contact {
	from: string = '';
	subject: string = '';
	body: string = '';

	constructor(protected validationController: ValidationController) { }

	send() {
		let errors = this.validationController.validate()
			.then(result => console.log(result));
	}
}

ValidationRules
	.ensure((c: Contact) => c.from).email().required()
	.ensure((c: Contact) => c.subject).required()
	.ensure((c: Contact) => c.body).required()
	.on(Contact);
