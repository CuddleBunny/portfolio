/// <reference path="../../Source/JS/Shepherd/shepherd.js" />

var tour = new Shepherd.Tour({
    defaults: {
        classes: 'shepherd-theme-square-dark',
		showCancelLink: true,
        buttons: []
    }
});



// Generic

tour.addStep('tools', {
    text: 'Select and drag the correct item from the tool tray.',
    attachTo: { element: '#tool-tray',  on: 'top' }
});

tour.addStep('click-tools', {
    text: 'Select the correct item from the tool tray.',
    attachTo: { element: '#tool-tray',  on: 'top' }
});

tour.addStep('timers', {
    text: 'Select a timer to begin the countdown.',
    attachTo: { element: '#time-bar',  on: 'top' }
});

tour.addStep('reset-timers', {
    text: 'Select a timer to silence the alarm.',
    attachTo: { element: '#time-bar',  on: 'top' }
});

// Tool tray helpers:

tour.addStep('click-tooltray-salt', {
    text: 'Select the correct item from the tool tray.',
    attachTo: { element: '#tool-tray div.tool:nth-child(1)',  on: 'top' }
});

tour.addStep('click-tooltray-scoop', {
    text: 'Select the correct item from the tool tray.',
    attachTo: { element: '#tool-tray div.tool:nth-child(2)',  on: 'top' }
});

tour.addStep('drag-tooltray-fries', {
    text: 'Select and drag the correct item from the tool tray.',
    attachTo: { element: '#tool-tray div.tool:nth-child(3)',  on: 'top' }
});

tour.addStep('drag-tooltray-fries2', {
    text: 'Now, finish dropping the Fries.',
    attachTo: { element: '#tool-tray div.tool:nth-child(3)',  on: 'top' }
});

tour.addStep('drag-tooltray-nuggets', {
    text: 'Select and drag the correct item from the tool tray.',
    attachTo: { element: '#tool-tray div.tool:nth-child(4)',  on: 'top' }
});

tour.addStep('click-tooltray-skimmer', {
    text: 'Select the correct item from the tool tray.',
    attachTo: { element: '#tool-tray div.tool:nth-child(5)',  on: 'top' }
});

tour.addStep('click-tooltray-tongs', {
    text: 'Select the correct item from the tool tray.',
    attachTo: { element: '#tool-tray div.tool:nth-child(6)',  on: 'top' }
});

tour.addStep('click-tooltray-trash', {
    text: 'Select the correct item from the tool tray.',
    attachTo: { element: '#tool-tray div.tool:nth-child(7)',  on: 'top' }
});

// Timer helpers:

tour.addStep('nugget-timer', {
    text: 'Select a timer to begin the countdown.',
    attachTo: { element: '#time-bar .right > div:nth-child(5)',  on: 'top' }
});

tour.addStep('nugget-reset', {
    text: 'Select a timer to silence the alarm.',
    attachTo: { element: '#time-bar .right > div:nth-child(5)',  on: 'top' }
});

tour.addStep('nugget-hold', {
    text: 'Select a timer to begin the countdown.',
    attachTo: { element: '#time-bar .left > div:nth-child(1)',  on: 'top' }
});

tour.addStep('nugget-hold-reset', {
    text: 'Select a timer to silence the alarm.',
    attachTo: { element: '#time-bar .left > div:nth-child(1)',  on: 'top' }
});

tour.addStep('fries-l1-timer', {
    text: 'Select a timer to begin the countdown.',
    attachTo: { element: '#time-bar .right > div:nth-child(1)',  on: 'top' }
});

tour.addStep('fries-l1-reset', {
    text: 'Select a timer to silence the alarm.',
    attachTo: { element: '#time-bar .right > div:nth-child(1)',  on: 'top' }
});

tour.addStep('fries-l1-hold', {
    text: 'Select a timer to begin the countdown.',
    attachTo: { element: '#time-bar .left > div:nth-child(3)',  on: 'top' }
});

tour.addStep('fries-l1-hold-reset', {
    text: 'Select a timer to silence the alarm.',
    attachTo: { element: '#time-bar .left > div:nth-child(3)',  on: 'top' }
});

tour.addStep('fries-l2-timer', {
    text: 'Select a timer to begin the countdown.',
    attachTo: { element: '#time-bar .right > div:nth-child(3)',  on: 'top' }
});

tour.addStep('fries-l2-reset', {
    text: 'Select a timer to silence the alarm.',
    attachTo: { element: '#time-bar .right > div:nth-child(3)',  on: 'top' }
});

tour.addStep('fries-r1-timer', {
    text: 'Select a timer to begin the countdown.',
    attachTo: { element: '#time-bar .right > div:nth-child(2)',  on: 'top' }
});

tour.addStep('fries-r1-reset', {
    text: 'Select a timer to silence the alarm.',
    attachTo: { element: '#time-bar .right > div:nth-child(2)',  on: 'top' }
});

tour.addStep('fries-r1-hold', {
    text: 'Select a timer to begin the countdown.',
    attachTo: { element: '#time-bar .left > div:nth-child(4)',  on: 'top' }
});

tour.addStep('fries-r2-timer', {
    text: 'Select a timer to begin the countdown.',
    attachTo: { element: '#time-bar .right > div:nth-child(4)',  on: 'top' }
});

tour.addStep('fries-r2-reset', {
    text: 'Select a timer to silence the alarm.',
    attachTo: { element: '#time-bar .right > div:nth-child(4)',  on: 'top' }
});

// Canvas area helpers:

tour.addStep('nugget-shake', {
    text: 'Select the handle of the dropped Chicken Nugget basket to gently shake the basket.',
    attachTo: 'canvas [top right]'
});

tour.addStep('nugget-lift', {
    text: 'Select the dropped Chicken Nugget basket to lift it out of the oil.',
    attachTo: 'canvas [top right]'
});

tour.addStep('nugget-drag', {
    text: 'Select the Left basket in Fryer Number Three and drag it to the front Chicken Nugget holding bin.',
    attachTo: 'canvas [top right]'
});

tour.addStep('nugget-drag2', {
    text: 'Select the Left basket in Fryer Number Three and drag it to the back Chicken Nugget holding bin.',
    attachTo: 'canvas [top right]'
});

tour.addStep('nugget-hold-swap', {
    text: 'Select the Back Chicken Nugget Holding Bin and drag it to the Front Chicken Nugget Holding Bin area.',
    attachTo: 'canvas [top right]'
});

tour.addStep('fries-lift', {
    text: 'Select the dropped Fry basket to lift it out of the oil.',
    attachTo: 'canvas [top right]'
});

tour.addStep('fries-l1-drag', {
    text: 'Select the Left basket in Fryer Number One and drag it to the Left Fry holding bin.',
    attachTo: 'canvas [top right]'
});

tour.addStep('fries-l2-drag', {
    text: 'Select the Left basket in Fryer Number Two and drag it to the Left Fry holding bin.',
    attachTo: 'canvas [top right]'
});

tour.addStep('fries-r1-drag', {
    text: 'Select the Right basket in Fryer Number One and drag it to the Right Fry holding bin.',
    attachTo: 'canvas [top right]'
});

tour.addStep('fries-r2-drag', {
    text: 'Select the Right basket in Fryer Number Two and drag it to the Right Fry holding bin.',
    attachTo: 'canvas [top right]'
});

tour.addStep('quiz', {
    text: 'Read the question and select the correct answer choice.',
    attachTo: '#question bottom'
});

// Carton helpers:

tour.addStep('carton-fries', {
    text: 'Select the Fry Cartons in the top left-hand corner to portion the Fries.',
    attachTo: '#carton-fries right'
});

tour.addStep('carton-nuggets', {
    text: 'Select the Chicken Nugget Cartons in the top left-hand corner to portion the Nuggets.',
    attachTo: '#carton-nuggets right'
});