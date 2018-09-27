function ShowTutorial() {
    ExtensionManager.extensions['tutorial'].Show();
    tutorialTour.start();
    $('#instructions .hover-button').show();
}

function HideTutorial() {
    ExtensionManager.extensions['tutorial'].Hide();
    $('#instructions .hover-button').hide();
}

var tutorialTour = new Shepherd.Tour({
    defaults: {
        classes: 'shepherd-theme-square-dark',
        showCancelLink: true,
        buttons: []
    }
});

tutorialTour.on('cancel', HideTutorial);
tutorialTour.on('complete', HideTutorial);

tutorialTour.addStep('step1', {
    text: 'You\'ll be challenged with four real-life scenarios.',
    attachTo: '#progress left',
    buttons: [
        { text: 'Next', action: tutorialTour.next }
    ]
});

tutorialTour.addStep('step2', {
    text: 'Follow the instructions provided in the red banner at the top of the screen and select the Next arrow to continue on to the next set of instructions.',
    attachTo: '#instructions .hover-button bottom',
    buttons: [
        { text: 'Next', action: tutorialTour.next }
    ]
});

tutorialTour.addStep('step3', {
    text: 'Complete the steps by selecting and dragging the product and equipment in the correct order.',
    attachTo: '#tool-tray top',
    buttons: [
        { text: 'Next', action: tutorialTour.next }
    ]
});

tutorialTour.addStep('step4', {
    text: 'If you get stuck at any point, hint pop ups like this one will appear to help guide you through the scenarios.',
    attachTo: '#container center',
    buttons: [
        { text: 'Next', action: tutorialTour.next }
    ]
});

tutorialTour.addStep('step5', {
    text: 'Keep in mind, accuracy is important, you get a few tries to answer correctly. But watch out, each wrong answer reduces your point total!',
    attachTo: '#scoreboard right',
    buttons: [
        { text: 'End', action: tutorialTour.next }
    ]
});