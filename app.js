new Vue({
    el: '#app',
    data: {
        name: 'jzelAdmin2006',
        message: 'Hello Vue!',

        person: {
            name: 'jzelAdmin2006',
            height: 1.85,
        }
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
        }
    }
});