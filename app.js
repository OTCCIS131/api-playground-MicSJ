$(function () {

    const vm = new Vue({
        el: '#things',

        data: {
            dogs: [],
        },

        methods: ({

            loadStuff() {
                this.$http.get('https://dog.ceo/api/breeds/list/all').then(response => {
                    this.dogs = response.body.message
                });
            },
        })
    })
})