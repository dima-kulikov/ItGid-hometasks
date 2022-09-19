new Vue ({
    el: '#app',
    data: {
        title: "Hello world!",
        styleColor:'',
        firstNum: '',
        secondNum: '',
        cars: [
            {name: 'Dima', age: 35 },
            {name: 'Lesia', age: 27 },
            {name: 'Kuma', age: 2 },
            {name: 'kaka' , age: 17 },
        ]
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
        },
        longText () {
          return  this.firstNum * this.secondNum;
        }
    },
    filters : {
        redtext (el) {
         return   el.toUpperCase ();
        // return   el.style.color = 'red';
        }
    }
});