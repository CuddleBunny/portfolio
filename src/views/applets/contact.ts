import { FluentApplet } from 'fluent/elements/applet/fluent-applet';

export class Contact extends FluentApplet {
	close() {
		this.controller.cancel();
	}

	send() {
		// TODO
	}
}
