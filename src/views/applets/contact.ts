import { FluentApplet } from './../../fluent/elements/applet/fluent-applet';
import { inject, NewInstance } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { ValidationController, ValidationRules, validateTrigger } from 'aurelia-validation';

@inject(NewInstance.of(ValidationController), HttpClient)
export class Contact {
	from: string = '';
	subject: string = '';
	body: string = '';

	applet: FluentApplet;

	constructor(protected validationController: ValidationController, private httpClient: HttpClient) {
		this.validationController.changeTrigger(validateTrigger.manual);
	}

	send() {
		let errors = this.validationController.validate()
			.then(result => {
				if(result.valid)
					this.httpClient.post('/api/services/email', { from: this.from, subject: this.subject, body: this.body })
						.then(result => {
							console.log(result);
							this.close();
						})
						.catch(error => {
							console.error(error)
							alert('An unexpected error has occured, please try again later.');
						});
			});
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
