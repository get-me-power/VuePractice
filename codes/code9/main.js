new Vue({
    el: '#app',
    data: {
        name: 'キマイラ',
        list: [
            {id: 1, name: 'スライム', hp: 100},
            {id: 2, name: 'ゴブリン', hp: 100},
            {id: 3, name: 'ドラゴン', hp: 100}
        ]
    },
    methods: {
        doAdd: function() {
            var max = this.list.reduce( function(a, b) {
                return a > b.id ? a : b.id 
            },0)
            this.list.push({
                id: max + 1,
                name: this.name,
                hp: 500
            }) 
        }
    }
})