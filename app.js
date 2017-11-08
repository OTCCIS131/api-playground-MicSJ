$(function () {

    const vm = Vue({
        el: '#things',

        data: {
            dogs: [],
        },

        methods: ({

            loadStuff() {
                this.$http.post('https://dog.ceo/api/breeds/list/').then(response => {
                    this.dogs = response.body
                });
            },
        })
    })
})