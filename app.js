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
            return 'Hello ' + this.name + '!';
        },
        greetParam: function(name) {
            return 'Hello ' + name + '!';
        }
    }
});