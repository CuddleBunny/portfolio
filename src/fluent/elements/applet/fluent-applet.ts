import { inject } from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog/dist/commonjs/dialog-controller';

@inject(DialogController)
export class FluentApplet {
	constructor(protected controller: DialogController) {}
}
