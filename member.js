function skillsMember() {
    return {
        name: 'Member',
        skills: [
            {
                name: 'Member',
                type: 'passive',
                image: 'member',
                tooltip: 'The member is a basic unit of any guild. They can be trained to perform various tasks.',
                manaCost: function (level) {
                    return 10 + (level * 10);
                },
                duration: function (level) {
                    return 0;
                },
                cooldown: function (level) {
                    return 0;
                },
                effect: function (level) {
                    return 0;
                },
                base: {
                    cost: 10,
                    duration: 0,
                    cooldown: 0,
                    effect: 0
                },
                max: {
                    cost: 100,
                    duration: 0,
                    cooldown: 0,
                    effect: 0
                },
                increment: {
                    cost: 10,
                    duration: 0,
                    cooldown: 0,
                    effect: 0
                },
                cost: function (level) {
                    return 10 + (level * 10);
                },
                duration: function (level) {
                    return 0;
                },
                cooldown: function (level) {
                    return 0;
                },
                effect: function (level) {
                    return 0;
                }
            }
        ]
    };
}