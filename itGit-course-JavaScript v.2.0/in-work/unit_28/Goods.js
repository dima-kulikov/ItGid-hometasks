class Goods {
    constructor(a, b, c, d){
        this.name = a;
        this.amount = b;
        this.image = c;
        this.count = d;
    }
    draw() {
        return `<img src="${this.image}"> <br> ${this.name}: ${this.count}`
    }
}