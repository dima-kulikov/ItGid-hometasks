new Vue ({
    el: '#app',
    data: {
        title: "Hello world!",
        styleColor:'',
        firstNum: 1,
        secondNum: 2,
    },
    methods: {
        renameText () {
            this.title = 'rabotaet'
        },
        myFunc(e) {
            this.firstNum = e;
            this.secondNum = this.firstNum * this.firstNum;
        }
    },
    computed: {
        threedNum () {
           return this.firstNum
        }
    }
});