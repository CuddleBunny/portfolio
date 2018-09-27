var manifest = {
    left1: '../../Assets/Images/Game/Level3/left1.png',
    left2: '../../Assets/Images/Game/Level3/left2.png',
    left3: '../../Assets/Images/Game/Level3/left3.png',
    left4: '../../Assets/Images/Game/Level3/left4.png',
    left5: '../../Assets/Images/Game/Level3/left5.png',
    left6: '../../Assets/Images/Game/Level3/left6.png',
    left7: '../../Assets/Images/Game/Level3/left7.png',
    left8: '../../Assets/Images/Game/Level3/left8.png',
    left9: '../../Assets/Images/Game/Level3/left9.png',
    left10: '../../Assets/Images/Game/Level3/left10.png',
    left11: '../../Assets/Images/Game/Level3/left11.png',
    right1: '../../Assets/Images/Game/Level3/right1.png',
    right2: '../../Assets/Images/Game/Level3/right2.png',
    right3: '../../Assets/Images/Game/Level3/right3.png',
    right4: '../../Assets/Images/Game/Level3/right4.png',
    right5: '../../Assets/Images/Game/Level3/right5.png',
    right6: '../../Assets/Images/Game/Level3/right6.png',
    right7: '../../Assets/Images/Game/Level3/right7.png',
    right8: '../../Assets/Images/Game/Level3/right8.png',
    right9: '../../Assets/Images/Game/Level3/right9.png'
};

var sounds = {
    bad: new Howl({ src: '../../Assets/Sounds/tone_negative.mp3' }),
    neutral: new Howl({ src: '../../Assets/Sounds/tone_neutral.mp3' }),
    good: new Howl({ src: '../../Assets/Sounds/tone_positive.mp3' }),
    alarm: new Howl({ src: '../../Assets/Sounds/tone_alarm.mp3' }),

    S03_C01: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C01.mp3' }),
    S03_C02: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C02.mp3' }),
    S03_C03: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C03.mp3' }),
    S03_C04: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C04.mp3' }),
    S03_C05: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C05.mp3' }),
    S03_C06: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C06.mp3' }),
    S03_C07: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C07.mp3' }),
    S03_C08: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C08.mp3' }),
    S03_C09: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C09.mp3' }),
    S03_C10: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C10.mp3' }),
    S03_C11: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C11.mp3' }),
    S03_C12: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C12.mp3' }),
    S03_C13: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C13.mp3' }),
    S03_C14: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C14.mp3' }),
    S03_C15: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C15.mp3' }),
    S03_C16: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C16.mp3' }),
    S03_C17: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C17.mp3' }),
    S03_C18: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C18.mp3' }),
    S03_C19: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C19.mp3' }),
    S03_C20: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C20.mp3' }),
    S03_C21: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C21.mp3' }),
    S03_C22: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C22.mp3' }),
    S03_C23: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C23.mp3' }),
    S03_C24: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C24.mp3' }),
    S03_C25: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C25.mp3' }),
    S03_C26: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C26.mp3' }),
    S03_C27: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C27.mp3' }),
    S03_C28: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C28.mp3' }),
    S03_C29: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C29.mp3' }),
    S03_C30: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C30.mp3' }),
    S03_C31: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C31.mp3' }),
    S03_C32: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C32.mp3' }),
    S03_C33: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C33.mp3' }),
    S03_C34: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C34.mp3' }),
    S03_C35: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C35.mp3' }),
    S03_C36: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C36.mp3' }),
    S03_C37: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C37.mp3' }),
    S03_C38: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C38.mp3' }),
    S03_C39: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C39.mp3' }),
    S03_C40: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C40.mp3' }),
    S03_C41: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C41.mp3' }),
    S03_C42: new Howl({ src: '../../Assets/Sounds/Scenario3/S03_C42.mp3' }),
    S02_C31: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C31.mp3' }),
    S01_C30: new Howl({ src: '../../Assets/Sounds/Scenario1/S01_C30.mp3' })
};

var script, game;

function StartGame() {
    game = new FryChallenge.FryGame();
    script = [
        { operation: 'timer', args: { minTime: 1, speed: 2000, time: 280 }, target: { zone: 'fries', index: 1 } },
        { operation: 'timer', args: { minTime: 1, speed: 2000, time: 280 }, target: { zone: 'nuggets', index: 1 } },
        { operation: 'instruct', value: 'Looks like a big lunch rush! Several families have just walked in the door.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S03_C01' },
        { operation: 'instruct', value: 'You still have some Nuggets available in the front holding bin and a small amount of Fries.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S03_C02' },
        { operation: 'instruct', value: 'Your OPS Leader tells you to drop another basket of Fries and half a bag of Nuggets.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S03_C03' },
        { operation: 'instruct', value: 'Drag the Fries and Nuggets into the Fryer.' },
        { operation: 'show-tools', args: ['salt', 'scoop', 'fries', 'nuggets', 'skimmer', 'tongs', 'trashcan'], helper: 'drag-tooltray-nuggets', value: 'nuggets', wait: true, target: { zone: FryChallenge.Oil, index: 4 }, audioClip: 'S03_C04', score: [500, 300, 150, 0] },
        { operation: 'increment-view', args: 'right' },
        { operation: 'show-tools', args: ['salt', 'scoop', 'fries', 'nuggets', 'skimmer', 'tongs', 'trashcan'], helper: 'drag-tooltray-fries', value: 'fries', wait: true, target: { zone: FryChallenge.Oil, index: 0 }, score: [500, 300, 150, 0] },
        { operation: 'increment-view', args: 'right' },
        { operation: 'payoff', value: '6-7', wait: true },
        { operation: 'instruct', value: 'Start the timers.' },
        // Timers should be clicked in the order that the product was dropped.
        { operation: 'timer', args: { minTime: 270, speed: 0, time: 270, awaitClick: true }, helper: 'nugget-timer', target: { zone: 'oil', index: 4 }, wait: true, audioClip: 'S03_C05', score: [500, 300, 150, 0] },
        { operation: 'timer', args: { minTime: 170, speed: 0, time: 170, awaitClick: true }, helper: 'fries-l1-timer', target: { zone: 'oil', index: 0 }, wait: true, score: [500, 300, 150, 0] },
        // Wait to start the timers till they've all been clicked so that they're not super out of sync.
        { operation: 'timer', args: { minTime: 155, speed: 300 }, target: { zone: 'oil', index: 0 } },
        { operation: 'timer', args: { minTime: 1, speed: 300 }, target: { zone: 'fries', index: 1 } },
        { operation: 'timer', args: { minTime: 1, speed: 300 }, target: { zone: 'nuggets', index: 1 } },
        { operation: 'instruct', value: 'After 15 to 30 seconds, gently shake the basket of Chicken Nuggets.' },
        { operation: 'timer', args: { minTime: 255, speed: 300, awaitFinish: true }, target: { zone: 'oil', index: 4 }, wait: true, audioClip: 'S03_C06' },
        { operation: 'timer', args: { minTime: 1, speed: 2000 }, target: { zone: 'fries', index: 1 } },
        { operation: 'timer', args: { minTime: 1, speed: 2000 }, target: { zone: 'nuggets', index: 1 } },
        { operation: 'hotspot', wait: true, target: { zone: FryChallenge.Handles, index: 4 }, helper: 'nugget-shake', payoff: '6-1', score: [500, 300, 150, 0] },
        { operation: 'instruct', value: 'Wait for the Fries to finish cooking.' },
        { operation: 'timer', args: { minTime: 100, speed: 50 }, target: { zone: 'oil', index: 4 } },
        { operation: 'timer', args: { minTime: 1, speed: 50 }, target: { zone: 'fries', index: 1 } },
        { operation: 'timer', args: { minTime: 1, speed: 50 }, target: { zone: 'nuggets', index: 1 } },
        { operation: 'timer', args: { minTime: 0, speed: 50, awaitFinish: true }, target: { zone: 'oil', index: 0 }, wait: true, audioClip: 'S03_C07' },
        { operation: 'timer', args: { minTime: 1, speed: 2000 }, target: { zone: 'oil', index: 4 } },
        { operation: 'timer', args: { minTime: 1, speed: 2000 }, target: { zone: 'fries', index: 1 } },
        { operation: 'timer', args: { minTime: 1, speed: 2000 }, target: { zone: 'nuggets', index: 1 } },
        { operation: 'instruct', value: 'The basket of Fries has finished cooking. Turn off the cook timer to silence the alarm.' },
        { operation: 'reset-timer', target: { zone: 'oil', index: 0 }, helper: 'fries-l1-reset', wait: true, audioClip: 'S03_C08', score: [500, 300, 150, 0] },
        { operation: 'instruct', value: 'Remember to lift the Fries out of the oil and gently shake the basket.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S03_C09' },
        { operation: 'payoff', value: '6-2', wait: true },
        { operation: 'increment-view', args: 'right' },
        { operation: 'instruct', value: 'Let the oil drain for 5-10 seconds.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S03_C10' },
        { operation: 'instruct', value: 'Then transfer the Fries to the Left (L) Holding Bin.' },
        {
            operation: 'dragspot',
            target: { zone: FryChallenge.Fries, index: 0 },
            args: {
                origin: { zone: FryChallenge.Oil, index: 0 },
                startOperation: { operation: 'increment-view', args: 'right' },
                wrongOperation: { operation: 'decrement-view', args: 'right' },
                image: 'basket_fries.png'
            },
            wait: true, audioClip: 'S03_C11', score: [500, 300, 150, 0], helper: 'fries-l1-drag'
        },
        { operation: 'increment-view', args: 'left' },
        { operation: 'increment-view', args: 'right' },
        { operation: 'instruct', value: 'Salt the Fries.' },
        { operation: 'click-tool', args: ['salt', 'scoop', 'fries', 'nuggets', 'skimmer', 'tongs', 'trashcan'], helper: 'click-tooltray-salt', value: 'salt', wait: true, audioClip: 'S03_C12', score: [500, 300, 150, 0] },
        { operation: 'payoff', value: '6-3', wait: true },
        { operation: 'instruct', value: 'Lift, mix, and spread the salted Fries.' },
        { operation: 'click-tool', args: ['salt', 'scoop', 'fries', 'nuggets', 'skimmer', 'tongs', 'trashcan'], helper: 'click-tooltray-scoop', value: 'scoop', wait: true, audioClip: 'S03_C13', score: [500, 300, 150, 0] },
        { operation: 'payoff', value: '6-4', wait: true },
        { operation: 'increment-view', args: 'left' },
        { operation: 'instruct', value: 'Activate the Left Holding Bin Timer.' },
        { operation: 'timer', args: { minTime: 0, speed: 2000, time: 300, awaitClick: true }, helper: 'fries-l1-hold', target: { zone: 'fries', index: 0 }, wait: true, audioClip: 'S03_C14', score: [500, 300, 150, 0] },
        { operation: 'instruct', value: 'This starts the 5-minute hold time.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S03_C15' },
        { operation: 'instruct', value: 'Order: Four Large Fries.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S03_C16' },
        {
            operation: 'question', wait: true, args: {
                question: '4 Large Fry orders are needed for the Dining Room. What should you do?',
                type: 'multiple-choice',
                answers: [
                    'Give the guest the Fries from the Left Holding Bin, as they are freshest.',
                    'Portion from the Right Holding Bin first.',
                    'It doesn\'t matter which one you do first, as long as you use all of the Fries.'
                ],
                remediation: [
                    'Incorrect. Serve product with the least amount of hold time remaining first.',
                    'Correct. Serve product with the least amount of hold time remaining first.',
                    'Incorrect. Serve product with the least amount of hold time remaining first.'
                ],
                remediationAudio: [
                    'S03_C18',
                    'S03_C19',
                    'S03_C20'
                ],
                correct: 1 // 0-based
            }, audioClip: 'S03_C17', score: [0, 500, 0], helper: 'quiz'
        },
        { operation: 'instruct', value: 'Order: Four Large Fries.', showNext: true, shellHelper: 'next-arrow' },
        { operation: 'hide-quiz' },
        { operation: 'reset-timer', target: { zone: 'fries', index: 1 }, args: { auto: true } },
        { operation: 'instruct', value: 'Portion the Fries' },
        { operation: 'click-tool', args: ['salt', 'scoop', 'fries', 'nuggets', 'skimmer', 'tongs', 'trashcan'], helper: 'click-tooltray-scoop', value: 'scoop', wait: true, audioClip: 'S02_C31', score: [500, 300, 150, 0] },
        { operation: 'carton', value: 'fries', wait: true, helper: 'carton-fries' },
        { operation: 'increment-view', args: 'left' },
        { operation: 'instruct', value: 'Your Fries are hot and ready to go!', showNext: true, shellHelper: 'next-arrow', audioClip: 'S03_C21' },
        { operation: 'carton-off', value: 'fries' },
        { operation: 'instruct', value: 'Order: Two 6-piece Nuggets', showNext: true, shellHelper: 'next-arrow', audioClip: 'S03_C22' },
        { operation: 'instruct', value: 'Portion the Nuggets and serve!' },
        { operation: 'click-tool', args: ['salt', 'scoop', 'fries', 'nuggets', 'skimmer', 'tongs', 'trashcan'], helper: 'click-tooltray-tongs', value: 'tongs', wait: true, audioClip: 'S03_C23', score: [500, 300, 150, 0] },
        { operation: 'carton', value: 'nuggets', wait: true, helper: 'carton-nuggets' },
        { operation: 'increment-view', args: 'left' },
        { operation: 'instruct', value: 'Two orders of Nuggets are now ready to serve.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S03_C24' },
        { operation: 'carton-off', value: 'nuggets' },
        { operation: 'timer', args: { minTime: 0, speed: 0, time: 0 }, target: { zone: 'oil', index: 4 } },
        { operation: 'instruct', value: 'The basket of Nuggets has finished cooking. Turn off the cook timer to silence the alarm.' },
        { operation: 'reset-timer', target: { zone: 'oil', index: 4 }, helper: 'nugget-reset', wait: true, audioClip: 'S01_C30', score: [500, 300, 150, 0] },
        { operation: 'instruct', value: 'Lift the Chicken Nuggets out of the oil and let them drain for five seconds.' },
        { operation: 'hotspot', wait: true, target: { zone: FryChallenge.Oil, index: 4 }, helper: 'nugget-lift', audioClip: 'S03_C26', score: [500, 300, 150, 0] },
        { operation: 'increment-view', args: 'right' },
        { operation: 'instruct', value: 'Where do they go?' },
        {
            operation: 'dragspot',
            target: { zone: FryChallenge.Nuggets, index: 1 },
            args: {
                origin: { zone: FryChallenge.Oil, index: 4 },
                startOperation: { operation: 'increment-view', args: 'right' },
                wrongOperation: { operation: 'decrement-view', args: 'right' },
                image: 'basket_nuggets.png'
            },
            wait: true, audioClip: 'S03_C27', score: [500, 300, 150, 0], helper: 'nugget-drag2'
        },
        { operation: 'increment-view', args: 'left' },
        { operation: 'increment-view', args: 'right' },
        { operation: 'instruct', value: 'Since there are nuggets in the Front Holding Bin, these will go to the Back Holding Bin.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S03_C28' },
        { operation: 'instruct', value: 'What do you do next?' },
        { operation: 'timer', args: { minTime: 1780, speed: 2000, time: 1800, awaitClick: true }, helper: 'nugget-hold', target: { zone: 'nuggets', index: 0 }, wait: true, audioClip: 'S03_C29', score: [500, 300, 150, 0] },
        { operation: 'instruct', value: 'You now have 30 minutes to serve these Nuggets.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S03_C30' },
        { operation: 'instruct', value: 'The nuggets in the front holding bin have reached their expiration time.' },
        { operation: 'timer', args: { minTime: 0, speed: 0, time: 0 }, target: { zone: 'nuggets', index: 1 } },
        { operation: 'reset-timer', target: { zone: 'nuggets', index: 1 }, helper: 'nugget-hold-reset', wait: true, audioClip: 'S03_C31', score: [500, 300, 150, 0] },
        { operation: 'timer', args: { minTime: 0, speed: 2000, time: 1780 }, target: { zone: 'nuggets', index: 1 } },
        { operation: 'reset-timer', target: { zone: 'nuggets', index: 0 }, args: { auto: true } },
        { operation: 'instruct', value: 'Select the trash can to discard the expired product.' },
        { operation: 'click-tool', args: ['salt', 'scoop', 'fries', 'nuggets', 'skimmer', 'tongs', 'trashcan'], helper: 'click-tooltray-trash', value: 'trashcan', wait: true, audioClip: 'S03_C32', score: [500, 300, 150, 0] },
        { operation: 'payoff', value: '6-5', wait: true },
        { operation: 'increment-view', args: 'left' },
        { operation: 'instruct', value: 'Drag the Back Holding Bin to the front. ' },
        {
            operation: 'dragspot',
            target: { zone: FryChallenge.Nuggets, index: 0 },
            args: {
                origin: { zone: FryChallenge.Nuggets, index: 1 },
                startOperation: { operation: 'increment-view', args: 'left' },
                wrongOperation: { operation: 'decrement-view', args: 'left' },
                image: 'bin_nuggets.png'
            },
            wait: true, audioClip: 'S03_C33', score: [500, 300, 150, 0], helper: 'nugget-hold-swap'
        },
        { operation: 'increment-view', args: 'left' },
        { operation: 'instruct', value: 'Note that the remaining time in the Back Holding Bin has automatically transferred to the Front Hold Timer.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S03_C34' },
        { operation: 'instruct', value: 'And the former Front Holding Bin is placed in the Back Holding Bin.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S03_C35' },
        { operation: 'instruct', value: 'Order: 4-Piece, 6-Piece, and 10-Piece Chicken Nuggets.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S03_C36' },
        { operation: 'instruct', value: 'Portion the Nuggets and serve!' },
        { operation: 'click-tool', args: ['salt', 'scoop', 'fries', 'nuggets', 'skimmer', 'tongs', 'trashcan'], helper: 'click-tooltray-tongs', value: 'tongs', wait: true, audioClip: 'S03_C37', score: [500, 300, 150, 0] },
        { operation: 'carton', value: 'nuggets2', wait: true, helper: 'carton-nuggets' },
        { operation: 'increment-view', args: 'left' },
        { operation: 'instruct', value: 'Three orders of Nuggets are now ready to serve.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S03_C38' },
        { operation: 'carton-off', value: 'nuggets2' },
        { operation: 'instruct', value: 'After that initial rush, things seem to be calming down a bit.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S03_C39' },
        { operation: 'instruct', value: 'Your products have expired and must be discarded.' },
        { operation: 'timer', args: { minTime: 0, speed: 0, time: 0 }, target: { zone: 'fries', index: 0 } },
        { operation: 'reset-timer', target: { zone: 'fries', index: 0 }, helper: 'fries-l1-hold-reset', wait: true, audioClip: 'S03_C40', score: [500, 300, 150, 0] },
        { operation: 'timer', args: { minTime: 0, speed: 0, time: 0 }, target: { zone: 'nuggets', index: 1 } },
        { operation: 'reset-timer', target: { zone: 'nuggets', index: 1 }, helper: 'nugget-hold-reset', wait: true, score: [500, 300, 150, 0] },
        { operation: 'instruct', value: 'Select the trash can to discard the expired product.' },
        { operation: 'click-tool', args: ['salt', 'scoop', 'fries', 'nuggets', 'skimmer', 'tongs', 'trashcan'], helper: 'click-tooltray-trash', value: 'trashcan', wait: true, audioClip: 'S03_C41', score: [500, 300, 150, 0] },
        { operation: 'payoff', value: '6-6', wait: true },
        { operation: 'increment-view', args: 'left' },
        { operation: 'instruct', value: 'Alright! The Holding Bins are all empty. You’ll be off to a fresh start in the next scenario!', showNext: true, shellHelper: 'next-arrow-end', audioClip: 'S03_C42' },
        { operation: 'next-slide', wait: true }
    ];
}