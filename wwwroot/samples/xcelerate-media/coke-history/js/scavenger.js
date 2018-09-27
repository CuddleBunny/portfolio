/// <reference path="../lib/kendo.web.min.js" />

var scavHuntStarted = false;
// TODO : load from suspend data?
var scavengerProgress = {};

// Will fire when the data is loaded.
function OnScavengerDataChanged() {
	if (scavengerProgress.length == 0) {
		$(this.data()).each(function () {
			scavengerProgress[this.id] = 0;
		});
	}
	$('#scavenger-panel').html(kendo.render(scavengerTemplate, this.view()));
	$('#scavenger-panel').xmpanel();
}

var scavengerTemplate = kendo.template($('#scavenger-template').html());
var scavengerDataSource = new kendo.data.DataSource({
	transport: {
		read: 'assets/scavHuntContent/data/scavHuntQuestions.xml'
	},
	schema: {
		type: 'xml',
		data: '/questions/question',
		model: {
			fields: {
				id: '@id',
				text: 'questionText/text()',
				answers: 'answer',
				correctAnswer: 'correct/text()',
				imagePath: 'image/@src',
				audioPath: 'audio/@src'
			}
		}
	},
	change: OnScavengerDataChanged
});

scavengerDataSource.read();