/// <reference path="../lib/kendo.web.min.js" />

// Will fire when the data is loaded.
function OnModalDataChanged() {
	//console.log('???');
	// Ensure the divs are empty if this is not the first time this function was called.
	$('.modalDiv').html('');
	$('#modalDialogs').html('');
	$(this.data()).each(function () {
		switch (this.type) {
			case 'image':
				$('#layer' + this.layer + 'modal').append(kendo.render(modalImageIconTemplate, [this]));
				$('#modalDialogs').append(kendo.render(modalImageTemplate, [this]));
				
				break;
			default:
				break;
		}
	});

	$.getScript("lib/jquery.reveal.js", function () {
		//do magic
	});
}

$('.iconImageBtnOn').click(function () {
    $('#achievement-panel').toggle();
})

var modalImageTemplate = kendo.template($('#modal-image-template').html());
var modalImageIconTemplate = kendo.template($('#modal-image-icon-template').html());

var modalDataSource = new kendo.data.DataSource({
	transport: {
		read: 'assets/modalContent/data/modals.xml'
	},
	schema: {
		type: 'xml',
		data: '/modals/modal',
		model: {
			fields: {
				id: '@id',
				era_id: '@era_id',
				layer: '@layer',
				type: '@type',
				top: '@top',
				left: '@left',
				media_src: '@media_src',
				headerText: 'headerText/text()',
				bodyText: 'bodyText/text()',
				videoPath: 'videoFile/text()',
				audioPath: 'audioFile/text()'
			}
		}
	},
	change: OnModalDataChanged
});

modalDataSource.read();