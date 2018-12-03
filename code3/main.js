new Vue({
    el: '#app',
    data: {
        count: 0
    },
    methods: {
        //ボタンをクリックしたときのハンドラ
        increment: function() {
            this.count += 1
        }
    }
})