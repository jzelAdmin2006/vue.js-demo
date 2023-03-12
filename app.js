let firstInstance = new Vue({
    el: '#firstInstanceapp',
    data: {
        name: 'jzelAdmin2006',
        message: 'Hello Vue!',
        person: {
            name: 'jzelAdmin2006',
            height: 1.85,
        },
        website: 'https://github.com/jzelAdmin2006',
        websiteTag: '<a href="https://github.com/jzelAdmin2006">Go to best GitHub user (tag).</a>',
        inAndDecreasingNumber: 54,
        doubleAndHalfingNumber: 54,
        persons: [
            {name: 'jzelAdmin2006', height: 1.85},
            {name: 'jzelAdmin2006#2', height: 1.90},
        ],
        firstname: '',
        lastname: '',
    },

    methods: {
        greet: function() {
            return 'Hello jzelAdmin2006!';
        },
        greetParam: function(name) {
            return 'Hello ' + name + '!';
        },
        greetThis: function() {
            return 'Hello ' + this.person.name + '!';
        },
        doubleNumber: function() {
            this.doubleAndHalfingNumber *= 2
        },
        halfNumber: function() {
            this.doubleAndHalfingNumber /= 2
        },
        resetName: function() {
            this.name = 'jzelAdmin2006';
        },
    },

    computed: {
        fullname: function() {
            return this.firstname + ' ' + this.lastname;
        }
    }
});

let secondInstance = new Vue({
    el: '#secondInstanceapp',
    methods: {
        changeName: function() {
            firstInstance.name = 'jzelAdmin2006#changedbysecondInstance';
        }
    },
    components: {
        'greeting-component': {
            template: '<p>Hi, I am a component!</p>'
        }
    }
});