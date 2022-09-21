Vue.component('dima-car', {
    data: function () {
        return {
            mycars: [
                {name:'Mers'},
                {name:'Volvo'},
                {name:'Ferari'},
                {name:'BMV'},
                {name:'Subaru'}
            ]
        }
    },
    template: `<div><div v-for='car in mycars'><p> Марка: {{car.name}}</p></div></div>`
}),


new Vue ({
    el:"#dima"
})



Vue.component ('vue-car', {
    data: function () {
        return {
            cars: [
                {name: 'Dima', age: 35 },
                {name: 'Lesia', age: 27 },
                {name: 'Kuma', age: 2 },
                {name: 'kaka' , age: 17 },
            ] 
        }
    },
    template: `<div><div v-for='car in cars'><p>{{car.name}}</p></div></div>`
});

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