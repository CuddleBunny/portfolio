var manifest = {
    left1: '../../Assets/Images/Game/Level2/left1.png',
    left2: '../../Assets/Images/Game/Level2/left2.png',
    left3: '../../Assets/Images/Game/Level2/left3.png',
    left4: '../../Assets/Images/Game/Level2/left4.png',
    left5: '../../Assets/Images/Game/Level2/left5.png',
    left6: '../../Assets/Images/Game/Level2/left6.png',
    left7: '../../Assets/Images/Game/Level2/left7.png',
    left8: '../../Assets/Images/Game/Level2/left8.png',
    right1: '../../Assets/Images/Game/Level2/right1.png',
    right2: '../../Assets/Images/Game/Level2/right2.png',
    right3: '../../Assets/Images/Game/Level2/right3.png',
    right4: '../../Assets/Images/Game/Level2/right4.png',
    right5: '../../Assets/Images/Game/Level2/right5.png',
    right6: '../../Assets/Images/Game/Level2/right6.png',
    right7: '../../Assets/Images/Game/Level2/right7.png',
    right8: '../../Assets/Images/Game/Level2/right8.png',
    right9: '../../Assets/Images/Game/Level2/right9.png',
    right10: '../../Assets/Images/Game/Level2/right10.png',
    right11: '../../Assets/Images/Game/Level2/right11.png',
    right12: '../../Assets/Images/Game/Level2/right12.png'
};

var sounds = {
    bad: new Howl({ src: '../../Assets/Sounds/tone_negative.mp3' }),
    neutral: new Howl({ src: '../../Assets/Sounds/tone_neutral.mp3' }),
    good: new Howl({ src: '../../Assets/Sounds/tone_positive.mp3' }),
    alarm: new Howl({ src: '../../Assets/Sounds/tone_alarm.mp3' }),

    S02_C01: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C01.mp3' }),
    S02_C02: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C02.mp3' }),
    S02_C03: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C03.mp3' }),
    S02_C04: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C04.mp3' }),
    S02_C05: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C05.mp3' }),
    S02_C06: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C06.mp3' }),
    S02_C07: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C07.mp3' }),
    S02_C08: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C08.mp3' }),
    S02_C09: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C09.mp3' }),
    S02_C10: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C10.mp3' }),
    S02_C11: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C11.mp3' }),
    S02_C12: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C12.mp3' }),
    S02_C13: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C13.mp3' }),
    S02_C14: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C14.mp3' }),
    S02_C15: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C15.mp3' }),
    S02_C16: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C16.mp3' }),
    S02_C17: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C17.mp3' }),
    S02_C18: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C18.mp3' }),
    S02_C19: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C19.mp3' }),
    S02_C20: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C20.mp3' }),
    S02_C21: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C21.mp3' }),
    S02_C22: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C22.mp3' }),
    S02_C23: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C23.mp3' }),
    S02_C24: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C24.mp3' }),
    S02_C25: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C25.mp3' }),
    S02_C26: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C26.mp3' }),
    S02_C27: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C27.mp3' }),
    S02_C28: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C28.mp3' }),
    S02_C29: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C29.mp3' }),
    S02_C30: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C30.mp3' }),
    S02_C31: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C31.mp3' }),
    S02_C32: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C32.mp3' }),
    S02_C33: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C33.mp3' }),
    S02_C34: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C34.mp3' }),
    S02_C35: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C35.mp3' }),
    S02_C36: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C36.mp3' }),
    S02_C37: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C37.mp3' }),
    S02_C38: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C38.mp3' }),
    S02_C39: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C39.mp3' }),
    S02_C40: new Howl({ src: '../../Assets/Sounds/Scenario2/S02_C40.mp3' }),
    S01_C30: new Howl({ src: '../../Assets/Sounds/Scenario1/S01_C30.mp3' })
};

var script, game;

function StartGame() {
    game = new FryChallenge.FryGame();
    script = [
        { operation: 'timer', args: { minTime: 1, speed: 1000, time: 200 }, target: { zone: 'fries', index: 0 } },
        { operation: 'timer', args: { minTime: 1, speed: 1000, time: 220 }, target: { zone: 'nuggets', index: 1 } },
        { operation: 'instruct', value: 'You still have a minimal number of Fries in the Holding Bin (about 1 large order) and 4 Nuggets left.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S02_C01' },
        { operation: 'instruct', value: 'A group of guests has just entered the dining room. Your OPS Leader tells you to drop more product: 2 baskets of Fries and 1 basket of Nuggets.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S02_C02' },
        {
            operation: 'question', wait: true, args: {
                question: 'Where is the best place to drop the separate baskets of Fries?',
                type: 'multiple-choice',
                answers: [
                    'Drop them in the same Fryer well.',
                    'Drop them in separate Fryer wells.'
                ],
                remediation: [
                    'Incorrect. You have to allow 45 seconds between basket drops in the same fryer to maintain oil temperature, so this option is slower and may delay customer orders.',
                    'Correct. This is the most efficient option. You should drop baskets on the same side of different wells in the R baskets.'
                ],
                remediationAudio: [
                    'S02_C04',
                    'S02_C05'
                ],
                correct: 1 // 0-based
            }, audioClip: 'S02_C03', score: [0, 500], helper: 'quiz'
        },
        { operation: 'instruct', value: 'A group of guests has just entered the dining room. Your OPS Leader tells you to drop more product: 2 baskets of Fries and 1 basket of Nuggets.', showNext: true, shellHelper: 'next-arrow' },
        { operation: 'instruct', value: 'Drag the Fries and Nuggets into the Fryer.' },
        { operation: 'hide-quiz' },
        { operation: 'show-tools', args: ['salt', 'scoop', 'fries', 'nuggets', 'skimmer', 'tongs', 'trashcan'], helper: 'drag-tooltray-nuggets', value: 'nuggets', wait: true, target: { zone: FryChallenge.Oil, index: 4 }, audioClip: 'S02_C06', score: [500, 300, 150, 0] },
        { operation: 'increment-view', args: 'right' },
        { operation: 'instruct', value: 'Note that you should drop the Nuggets first, as they have a longer cook time.' },
        { operation: 'show-tools', args: ['salt', 'scoop', 'fries', 'nuggets', 'skimmer', 'tongs', 'trashcan'], helper: 'drag-tooltray-fries2', value: 'fries', wait: true, target: { zone: FryChallenge.Oil, index: 1 }, audioClip: 'S02_C07', score: [500, 300, 150, 0] },
        { operation: 'increment-view', args: 'right' },
        { operation: 'payoff', value: '4-7', wait: true },
        { operation: 'show-tools', args: ['salt', 'scoop', 'fries', 'nuggets', 'skimmer', 'tongs', 'trashcan'], helper: 'drag-tooltray-fries2', value: 'fries', wait: true, target: { zone: FryChallenge.Oil, index: 3 }, score: [500, 300, 150, 0] },
        { operation: 'increment-view', args: 'right' },
        { operation: 'payoff', value: '4-8', wait: true },
        { operation: 'instruct', value: 'Remember to shake the Fry baskets back and forth for a few seconds to prevent fries from sticking together.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S02_C08' },
        { operation: 'instruct', value: 'Start the timers.' },
        // Timers should be clicked in the order that the product was dropped.
        { operation: 'timer', args: { minTime: 270, speed: 0, time: 270, awaitClick: true }, helper: 'nugget-timer', target: { zone: 'oil', index: 4 }, wait: true, audioClip: 'S02_C09', score: [500, 300, 150, 0] },
        { operation: 'timer', args: { minTime: 170, speed: 0, time: 170, awaitClick: true }, helper: 'fries-r1-timer', target: { zone: 'oil', index: 1 }, wait: true, score: [500, 300, 150, 0] },
        { operation: 'timer', args: { minTime: 170, speed: 0, time: 170, awaitClick: true }, helper: 'fries-r2-timer', target: { zone: 'oil', index: 3 }, wait: true, score: [500, 300, 150, 0] },
        // Wait to start the timers till they've all been clicked so that they're not super out of sync.
        { operation: 'timer', args: { minTime: 1, speed: 300 }, target: { zone: 'fries', index: 0 } },
        { operation: 'timer', args: { minTime: 1, speed: 300 }, target: { zone: 'nuggets', index: 1 } },
        { operation: 'timer', args: { minTime: 155, speed: 300 }, target: { zone: 'oil', index: 1 } },
        { operation: 'timer', args: { minTime: 155, speed: 300 }, target: { zone: 'oil', index: 3 } },
        { operation: 'instruct', value: 'After 15 to 30 seconds, gently shake the basket of Chicken Nuggets.' },
        { operation: 'timer', args: { minTime: 255, speed: 300, awaitFinish: true }, target: { zone: 'oil', index: 4 }, wait: true, audioClip: 'S02_C10' },
        { operation: 'hotspot', wait: true, target: { zone: FryChallenge.Handles, index: 4 }, helper: 'nugget-shake', payoff: '4-1', score: [500, 300, 150, 0] },
        { operation: 'timer', args: { minTime: 0, speed: 0, time: 0 }, target: { zone: 'fries', index: 0 } },
        { operation: 'timer', args: { minTime: 0, speed: 0, time: 0 }, target: { zone: 'nuggets', index: 1 } },
        { operation: 'timer', args: { minTime: 100, speed: 1000 }, target: { zone: 'oil', index: 4 } },
        { operation: 'timer', args: { minTime: 0, speed: 1000 }, target: { zone: 'oil', index: 1 } },
        { operation: 'timer', args: { minTime: 0, speed: 1000 }, target: { zone: 'oil', index: 3 } },
        { operation: 'instruct', value: 'Your original products have expired and must be discarded. Turn off the hold timers to silence the alarms.' },
        { operation: 'reset-timer', target: { zone: 'fries', index: 0 }, wait: true, helper: 'fries-l1-hold-reset', audioClip: 'S02_C11', score: [500, 300, 150, 0] },
        { operation: 'reset-timer', target: { zone: 'nuggets', index: 1 }, wait: true, helper: 'nugget-hold-reset', score: [500, 300, 150, 0] },
        { operation: 'instruct', value: 'Select the trash can to discard the expired product.' },
        { operation: 'click-tool', args: ['salt', 'scoop', 'fries', 'nuggets', 'skimmer', 'tongs', 'trashcan'], helper: 'click-tooltray-trash', value: 'trashcan', wait: true, audioClip: 'S02_C12', score: [500, 300, 150, 0] },
        { operation: 'payoff', value: '4-2', wait: true },
        { operation: 'increment-view', args: 'left' },
        { operation: 'instruct', value: 'Wait for the Fries to finish cooking.' },
        { operation: 'timer', args: { minTime: 20, speed: 50 }, target: { zone: 'oil', index: 4 } },
        { operation: 'timer', args: { minTime: 0, speed: 50 }, target: { zone: 'oil', index: 1 } },
        { operation: 'timer', args: { minTime: 0, speed: 50, awaitFinish: true }, wait: true, target: { zone: 'oil', index: 3 }, audioClip: 'S02_C13' },
        { operation: 'timer', args: { minTime: 20, speed: 1000 }, target: { zone: 'oil', index: 4 } },
        { operation: 'instruct', value: 'The baskets of Fries have finished cooking. Turn off the cook timers to silence the alarms.' },
        { operation: 'reset-timer', target: { zone: 'oil', index: 1 }, helper: 'fries-r1-reset', wait: true, audioClip: 'S02_C14', score: [500, 300, 150, 0] },
        { operation: 'reset-timer', target: { zone: 'oil', index: 3 }, helper: 'fries-r2-reset', wait: true, score: [500, 300, 150, 0] },
        { operation: 'instruct', value: 'Remember to lift the Fries out of the oil, gently shake the baskets, and then hook the baskets on the Fryer edge.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S02_C15' },
        { operation: 'payoff', value: '4-3', wait: true },
        { operation: 'increment-view', args: 'right' },
        { operation: 'instruct', value: 'Select and drag the Right basket from Fryer Number One to the appropriate holding bin.' },
        {
            operation: 'dragspot',
            target: { zone: FryChallenge.Fries, index: 1 },
            args: {
                origin: { zone: FryChallenge.Oil, index: 1 },
                startOperation: { operation: 'increment-view', args: 'right' },
                wrongOperation: { operation: 'decrement-view', args: 'right' },
                image: 'basket_fries.png'
            },
            wait: true, audioClip: 'S02_C16', score: [500, 300, 150, 0], helper: 'fries-r1-drag'
        },
        { operation: 'increment-view', args: 'left' },
        { operation: 'increment-view', args: 'right' },
        { operation: 'instruct', value: 'Select and drag the Right basket from Fryer Number Two to the appropriate holding bin.' },
        {
            operation: 'dragspot',
            target: { zone: FryChallenge.Fries, index: 1 },
            args: {
                origin: { zone: FryChallenge.Oil, index: 3 },
                startOperation: { operation: 'increment-view', args: 'right' },
                wrongOperation: { operation: 'decrement-view', args: 'right' },
                image: 'basket_fries.png'
            },
            wait: true, audioClip: 'S02_C17', score: [500, 300, 150, 0], helper: 'fries-r2-drag'
        },
        { operation: 'increment-view', args: 'left' },
        { operation: 'increment-view', args: 'right' },
        { operation: 'instruct', value: 'Salt the Fries.' },
        { operation: 'click-tool', args: ['salt', 'scoop', 'fries', 'nuggets', 'skimmer', 'tongs', 'trashcan'], helper: 'click-tooltray-salt', value: 'salt', wait: true, audioClip: 'S02_C18', score: [500, 300, 150, 0] },
        { operation: 'payoff', value: '4-4', wait: true },
        { operation: 'instruct', value: 'Note that when we have 2 baskets of Fries together in the holding Bin, we salt them twice.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S02_C19' },
        { operation: 'instruct', value: 'First, we salt front to back. And then again, back to front.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S02_C20' },
        { operation: 'instruct', value: 'Lift, mix, and spread the salted Fries.' },
        { operation: 'click-tool', args: ['salt', 'scoop', 'fries', 'nuggets', 'skimmer', 'tongs', 'trashcan'], helper: 'click-tooltray-scoop', value: 'scoop', wait: true, audioClip: 'S02_C21', score: [500, 300, 150, 0] },
        { operation: 'payoff', value: '4-5', wait: true },
        { operation: 'increment-view', args: 'left' },
        { operation: 'instruct', value: 'What do you do next?' },
        { operation: 'timer', args: { minTime: 0, speed: 1000, time: 300, awaitClick: true }, target: { zone: 'fries', index: 1 }, helper: 'fries-r1-hold', audioClip: 'S02_C22', wait: true, score: [500, 300, 150, 0] },
        { operation: 'instruct', value: 'You now have 5 minutes to serve these Fries.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S02_C23' },
        { operation: 'instruct', value: 'Wait for the basket of Nuggets to finish cooking.' },
        { operation: 'timer', args: { minTime: 0, speed: 100 }, target: { zone: 'fries', index: 1 } },
        { operation: 'timer', args: { minTime: 0, speed: 100, awaitFinish: true }, wait: true, target: { zone: 'oil', index: 4 }, audioClip: 'S02_C24' },
        { operation: 'timer', args: { minTime: 0, speed: 1000 }, target: { zone: 'fries', index: 1 } },
        { operation: 'instruct', value: 'The basket of Nuggets has finished cooking. Turn off the cook timer to silence the alarm.' },
        { operation: 'reset-timer', target: { zone: 'oil', index: 4 }, helper: 'nugget-reset', wait: true, audioClip: 'S01_C30', score: [500, 300, 150, 0] },
        { operation: 'instruct', value: 'Lift the Chicken Nuggets out of the oil and let them drain for five seconds.' },
        { operation: 'hotspot', wait: true, target: { zone: FryChallenge.Oil, index: 4 }, helper: 'nugget-lift', audioClip: 'S02_C26', score: [500, 300, 150, 0] },
        { operation: 'increment-view', args: 'right' },
        { operation: 'instruct', value: 'Where do they go?' },
        {
            operation: 'dragspot',
            target: { zone: FryChallenge.Nuggets, index: 0 },
            args: {
                origin: { zone: FryChallenge.Oil, index: 4 },
                startOperation: { operation: 'increment-view', args: 'right' },
                wrongOperation: { operation: 'decrement-view', args: 'right' },
                image: 'basket_nuggets_full.png'
            },
            wait: true, audioClip: 'S02_C27', score: [500, 300, 150, 0], helper: 'nugget-drag'
        },
        { operation: 'increment-view', args: 'left' },
        { operation: 'increment-view', args: 'right' },
        { operation: 'instruct', value: 'What do you do next?' },
        { operation: 'timer', args: { minTime: 0, speed: 1000, time: 1800, awaitClick: true }, target: { zone: 'nuggets', index: 1 }, helper: 'nugget-hold', wait: true, audioClip: 'S02_C28', score: [500, 300, 150, 0] },
        { operation: 'instruct', value: 'You now have 30 minutes to serve these Nuggets.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S02_C29' },
        { operation: 'instruct', value: 'Order: Three 10-Piece Nugget Large Combos', showNext: true, shellHelper: 'next-arrow', audioClip: 'S02_C30' },
        { operation: 'instruct', value: 'Portion the Fries' },
        { operation: 'click-tool', args: ['salt', 'scoop', 'fries', 'nuggets', 'skimmer', 'tongs', 'trashcan'], helper: 'click-tooltray-scoop', value: 'scoop', wait: true, audioClip: 'S02_C31', score: [500, 300, 150, 0] },
        { operation: 'carton', value: 'fries', wait: true, helper: 'carton-fries' },
        { operation: 'increment-view', args: 'left' },
        { operation: 'instruct', value: 'Three orders of Fries are now ready to serve.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S02_C32' },
        { operation: 'carton-off', value: 'fries' },
        { operation: 'instruct', value: 'Portion the Nuggets' },
        { operation: 'click-tool', args: ['salt', 'scoop', 'fries', 'nuggets', 'skimmer', 'tongs', 'trashcan'], helper: 'click-tooltray-tongs', value: 'tongs', wait: true, audioClip: 'S02_C33', score: [500, 300, 150, 0] },
        { operation: 'carton', value: 'nuggets', wait: true, helper: 'carton-nuggets' },
        { operation: 'increment-view', args: 'left' },
        { operation: 'instruct', value: 'Three orders of Nuggets are now ready to serve.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S02_C34' },
        { operation: 'carton-off', value: 'nuggets' },
        { operation: 'carton-on', value: 'combo' },
        { operation: 'instruct', value: 'These orders are ready to go... with a drink, of course!', showNext: true, shellHelper: 'next-arrow', audioClip: 'S02_C35' },
        { operation: 'carton-off', value: 'combo' },
        { operation: 'instruct', value: 'Now that there is a short break in the action, you should clean up your work area.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S02_C36' },
        { operation: 'instruct', value: 'There is some debris in the Fryers you should take care of.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S02_C37' },
        { operation: 'instruct', value: 'Select the Skimmer.' },
        { operation: 'click-tool', args: ['salt', 'scoop', 'fries', 'nuggets', 'skimmer', 'tongs', 'trashcan'], helper: 'click-tooltray-skimmer', value: 'skimmer', wait: true, audioClip: 'S02_C38', score: [500, 300, 150, 0] },
        { operation: 'payoff', value: '4-6', wait: true },
        { operation: 'instruct', value: 'Particles skimmed from the fryers should be discarded in the grease bucket. During a service break, make sure you skim the Fryers, as needed.', showNext: true, shellHelper: 'next-arrow', audioClip: 'S02_C39' },
        { operation: 'instruct', value: 'Great job! You’ve made sure everyone received fresh Fries and Nuggets!', showNext: true, shellHelper: 'next-arrow-end', audioClip: 'S02_C40' },
        { operation: 'next-slide', wait: true }
    ];
}